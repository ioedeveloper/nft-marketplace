import { Dispatch } from "react"
import { create } from "ipfs-http-client"
import { Buffer } from "buffer"
import { ethers } from "ethers"
import axios from "axios"
import { dispatchNFTFetchFailure, dispatchNFTFetchRequest, dispatchNFTFetchSuccess, dispatchNFTUploadFailure, dispatchNFTUploadRequest, dispatchNFTUploadSuccess } from "./dispatch"
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

export const uploadNFTToIPFS = (nft: NFT) => async (dispatch: Dispatch<any>) => {
    dispatchNFTUploadRequest()(dispatch)
    try {
        const cid = await ipfs.add(nft.image!)
        const hash = cid.path
        const injectedWeb3 = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(DEPLOY_CONFIG.contractAddress, DEPLOY_CONFIG.contractABI, injectedWeb3.getSigner())
        
        nft.hash = hash
        const mintTx = await contract['publicMint'](nft.owner, nft.hash, nft.name, nft.price, nft.contactAddress, nft.description)
        await mintTx.wait()
        dispatchNFTUploadSuccess(nft)(dispatch)
    } catch (error: any) {
        dispatchNFTUploadFailure(error.message)(dispatch)
    }
}

export const fetchNFTList = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatchNFTFetchRequest()(dispatch)
    const response = await axios.post(process.env['NX_INFURA_GOERLI_ENDPOINT']!, JSON.stringify({
      jsonrpc: '2.0',
      method: 'eth_getLogs',
      params: [
        {
          address: DEPLOY_CONFIG.contractAddress,
          fromBlock: '0x8042DE', // converted decimal block number to hexadecimal
          limit: 20
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
  
    const contract = new ethers.Contract(DEPLOY_CONFIG.contractAddress, DEPLOY_CONFIG.contractABI, new ethers.providers.JsonRpcProvider(process.env['NX_INFURA_GOERLI_ENDPOINT']!))
    const nftList: NFT[] = await Promise.all(tnxs.map(async (txn: { id: string, to: string, txnHash: string }): Promise<NFT> => {
      if (txn.id === '0x') txn.id = '0x0'
      const nftData = await contract['tokensData'](txn.id)

      return {
        id: txn.id,
        name: nftData.name,
        description: nftData.description,
        hash: nftData.ipfsHash,
        price: nftData.price,
        contactAddress: nftData.contactAddress,
        owner: txn.to,
        verified: nftData.verified
      }
    }))
    dispatchNFTFetchSuccess(nftList)(dispatch)
  } catch (error: any) {
    console.log('error: ', error)
    dispatchNFTFetchFailure(error.message)(dispatch)
  }

}

// archive eth_call params
      //params: [
      //   {
      //     to: DEPLOY_CONFIG.contractAddress,
      //     data: ethers.utils.id('nftData(uint256)').slice(0, 10) + ethers.utils.hexZeroPad(txn.id, 32).slice(2)
      //   },
      //   'latest'
      // ],
// archive converting to 32 bytes '0x' + web3.utils.padLeft(DEPLOY_CONFIG.contractAddress.replace('0x', ''), 64)
