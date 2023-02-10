import { Dispatch } from "react"
import { create } from "ipfs-http-client"
import { Buffer } from "buffer"
import { ethers } from "ethers"
import axios from "axios"
import { dispatchMarketplaceFailure, dispatchMarketplaceRequest, dispatchMarketplaceApproved, dispatchNFTFetchFailure, dispatchNFTFetchRequest, dispatchNFTFetchSuccess, dispatchNFTUploadFailure, dispatchNFTUploadRequest, dispatchNFTUploadSuccess, dispatchVerifyNFT, dispatchBuyNFT, dispatchTransferNFT } from "./dispatch"
import { NFT } from "../types"
import { DEPLOY_CONFIG } from "../config/deploy"

const infuraAuth = 'Basic ' + Buffer.from(process.env['NX_INFURA_PROJECT_ID'] + ':' + process.env['NX_INFURA_API_SECRET']).toString('base64')
const infuraConfig = {
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: { authorization: infuraAuth }
}
const ipfs = create(infuraConfig)

window.web3Provider = new ethers.providers.Web3Provider(window.ethereum)

export const uploadNFTToIPFS = (nft: NFT) => async (dispatch: Dispatch<any>) => {
    dispatchNFTUploadRequest()(dispatch)
    try {
        const cid = await ipfs.add(nft.image!)
        const hash = cid.path
        const contract = new ethers.Contract(DEPLOY_CONFIG.tokenAddress, DEPLOY_CONFIG.tokenABI, window.web3Provider.getSigner())
        const price = ethers.utils.parseEther(nft.price)
        
        nft.hash = hash
        const mintTx = await contract['publicMint'](nft.owner, nft.hash, nft.name, price, nft.contactAddress, nft.description)

        await mintTx.wait()
        dispatchNFTUploadSuccess(nft)(dispatch)
    } catch (error: any) {
        dispatchNFTUploadFailure(error.message)(dispatch)
    }
}

export const fetchNFTList = (limit = 20) => async (dispatch: Dispatch<any>) => {
  try {
    dispatchNFTFetchRequest()(dispatch)
    const response = await axios.post(process.env['NX_INFURA_GOERLI_ENDPOINT']!, JSON.stringify({
      jsonrpc: '2.0',
      method: 'eth_getLogs',
      params: [
        {
          address: DEPLOY_CONFIG.tokenAddress,
          topics: [DEPLOY_CONFIG.mintTokenTopic],
          fromBlock: '0x80E5B7', // converted decimal block number to hexadecimal
          limit
        },
      ],
      id: 0,
    }))
  
    const tnxs = response.data.result.map((txn: { topics: string[], transactionHash: string }) => {
      return {
        id: ethers.utils.hexStripZeros(txn.topics[1]),
        txnHash: txn.transactionHash,
      }
    })
  
    const contract = new ethers.Contract(DEPLOY_CONFIG.tokenAddress, DEPLOY_CONFIG.tokenABI, new ethers.providers.JsonRpcProvider(process.env['NX_INFURA_GOERLI_ENDPOINT']!))
    const nftList: NFT[] = await Promise.all(tnxs.map(async (txn: { id: string, to: string, txnHash: string }): Promise<NFT> => {
      if (txn.id === '0x') txn.id = '0x0'
      const nftData = await contract['tokensData'](txn.id)
      const price = ethers.utils.formatEther(nftData.price)
      
      return {
        id: txn.id,
        name: nftData.name,
        description: nftData.description,
        hash: nftData.ipfsHash,
        price: price,
        contactAddress: nftData.contactAddress,
        owner: nftData.owner,
        verified: nftData.verified,
        txnHash: txn.txnHash
      }
    }))
    dispatchNFTFetchSuccess(nftList)(dispatch)
  } catch (error: any) {
    dispatchNFTFetchFailure(error.message)(dispatch)
  }

}

export const authorizeMarketplace = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatchMarketplaceRequest()(dispatch)
    const contract = new ethers.Contract(DEPLOY_CONFIG.tokenAddress, DEPLOY_CONFIG.tokenABI, window.web3Provider.getSigner())
    const approveAllTxn = await contract['setApprovalForAll'](DEPLOY_CONFIG.marketplaceAddress, true)
    
    await approveAllTxn.wait()
    dispatchMarketplaceApproved()(dispatch)
  } catch (error: any) {
    dispatchMarketplaceFailure(error.message)(dispatch)
  }
}

export const checkMarketplaceAuthorization = () => async (dispatch: Dispatch<any>) => {
  try {
    const contract = new ethers.Contract(DEPLOY_CONFIG.tokenAddress, DEPLOY_CONFIG.tokenABI, window.web3Provider.getSigner())
    const isApproved = await contract['isApprovedForAll'](await window.web3Provider.getSigner().getAddress(), DEPLOY_CONFIG.marketplaceAddress)

    if (isApproved) {
      dispatchMarketplaceApproved()(dispatch)
    }
  } catch (error: any) {
    dispatchMarketplaceFailure(error.message)(dispatch)
  }
}

export const transferNFT = (owner: string, to: string, id: string, ) => async (dispatch: Dispatch<any>) => {
  try {
    dispatchMarketplaceRequest()(dispatch)
    const marketplace = new ethers.Contract(DEPLOY_CONFIG.marketplaceAddress, DEPLOY_CONFIG.marketplaceABI, window.web3Provider.getSigner())
    const transferTxn = await marketplace['transferTokenOwnership'](owner, to, id)

    await transferTxn.wait()
    await fetchNFTList()(dispatch)
    dispatchTransferNFT(id, to)(dispatch)
  } catch (error: any) {
    console.log(error)
    dispatchMarketplaceFailure(error.message)(dispatch)
  }
}

export const buyNFT = (nft: NFT, buyer: string) => async (dispatch: Dispatch<any>) => {
  try {
    const contract = new ethers.Contract(DEPLOY_CONFIG.marketplaceAddress, DEPLOY_CONFIG.marketplaceABI, window.web3Provider.getSigner())
    const buyTxn = await contract['buy'](nft.owner, buyer, nft.id, ethers.utils.parseEther(nft.price))

    await buyTxn.wait()
    dispatchBuyNFT(nft.id!, buyer)(dispatch)
  } catch (error: any) {
    if (error.message.indexOf('caller is not token owner or approved') > 0) {
      dispatchMarketplaceFailure('Sorry we cannot complete your purchase because the owner of this NFT has not approved the marketplace to allow sales.')(dispatch)
    } else {
        dispatchMarketplaceFailure(error.message)(dispatch)
    }
  }
}

export const verifyNFT = (id: string) => async (dispatch: Dispatch<any>) => {
    const contract = new ethers.Contract(DEPLOY_CONFIG.tokenAddress, DEPLOY_CONFIG.tokenABI, window.web3Provider.getSigner())
    const verifyTxn = await contract['verifyMint'](id)

    await verifyTxn.wait()
    dispatchVerifyNFT(id)(dispatch)
}
