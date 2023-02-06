import { Dispatch } from "react"
import { create } from "ipfs-http-client"
import { Buffer } from "buffer"
import { ethers } from "ethers"
import axios from "axios"
import { dispatchApproveMarketplaceFailure, dispatchApproveMarketplaceRequest, dispatchApproveMarketplaceSuccess, dispatchNFTFetchFailure, dispatchNFTFetchRequest, dispatchNFTFetchSuccess, dispatchNFTUploadFailure, dispatchNFTUploadRequest, dispatchNFTUploadSuccess } from "./dispatch"
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
          fromBlock: '0x80CA24', // converted decimal block number to hexadecimal
          limit
        },
      ],
      id: 0,
    }))
  
    const tnxs = response.data.result.map((txn: { topics: string[], transactionHash: string }) => {
      return {
        id: ethers.utils.hexStripZeros(txn.topics[3]),
        to: ethers.utils.hexZeroPad(ethers.utils.hexStripZeros(txn.topics[2]), 20),
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
        owner: txn.to,
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
    dispatchApproveMarketplaceRequest()(dispatch)
    const contract = new ethers.Contract(DEPLOY_CONFIG.tokenAddress, DEPLOY_CONFIG.tokenABI, window.web3Provider.getSigner())
    const approveAllTxn = await contract['setApprovalForAll'](DEPLOY_CONFIG.marketplaceAddress, true)
    
    await approveAllTxn.wait()
    dispatchApproveMarketplaceSuccess()(dispatch)
  } catch (error: any) {
    dispatchApproveMarketplaceFailure(error.message)(dispatch)
  }
}

export const checkMarketplaceAuthorization = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatchApproveMarketplaceRequest()(dispatch)
    const contract = new ethers.Contract(DEPLOY_CONFIG.tokenAddress, DEPLOY_CONFIG.tokenABI, window.web3Provider.getSigner())
    const isApproved = await contract['isApprovedForAll'](await window.web3Provider.getSigner().getAddress(), DEPLOY_CONFIG.marketplaceAddress)

    if (isApproved) {
      dispatchApproveMarketplaceSuccess()(dispatch)
    }
  } catch (error: any) {
    dispatchApproveMarketplaceFailure(error.message)(dispatch)
  }
}

export const transferNFT = (owner: string, id: string, to: string) => async (dispatch: Dispatch<any>) => {
  try {
    dispatchApproveMarketplaceRequest()(dispatch)
    const contract = new ethers.Contract(DEPLOY_CONFIG.tokenAddress, DEPLOY_CONFIG.tokenABI, window.web3Provider.getSigner())
    const transferTxn = await contract['transferFrom'](owner, to, id)

    await transferTxn.wait()
    dispatchApproveMarketplaceSuccess()(dispatch)
  } catch (error: any) {
    dispatchApproveMarketplaceFailure(error.message)(dispatch)
  }
}

// export const buyNFT = (nft: NFT) => async (dispatch: Dispatch<any>) => {
//   try {
//     dispatchApproveMarketplaceRequest()(dispatch)
//     const contract = new ethers.Contract(DEPLOY_CONFIG.marketplaceAddress, DEPLOY_CONFIG.marketplaceABI, window.web3Provider.getSigner())
//     const buyTxn = await contract['buy'](nft.id)

//     await buyTxn.wait()
//     dispatchApproveMarketplaceSuccess()(dispatch)
//   } catch (error: any) {
//     dispatchApproveMarketplaceFailure(error.message)(dispatch)
//   }
// }
