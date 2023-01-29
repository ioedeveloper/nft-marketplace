import { Dispatch } from "react"
import { create } from "ipfs-http-client"
import { Buffer } from "buffer"
import { ethers } from "ethers"
import axios from "axios"
import web3 from "web3"
import { dispatchNFTUploadFailure, dispatchNFTUploadRequest, dispatchNFTUploadSuccess } from "./dispatch"
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
        const cid = await ipfs.add(nft.image)
        const hash = cid.path
        const injectedWeb3 = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(DEPLOY_CONFIG.contractAddress, DEPLOY_CONFIG.contractABI, injectedWeb3.getSigner())
        
        nft.hash = hash
        const mintTx = await contract['publicMint'](nft.owner, nft.name, nft.price, nft.contactAddress, nft.description)
        await mintTx.wait()
        dispatchNFTUploadSuccess(nft)(dispatch)
    } catch (error: any) {
        dispatchNFTUploadFailure(error.message)(dispatch)
    }
}

export const fetchNFTList = () => async (dispatch: Dispatch<any>) => {
  const response = await axios.post(process.env['NX_INFURA_GOERLI_ENDPOINT']!, JSON.stringify({
    jsonrpc: '2.0',
    method: 'eth_getLogs',
    params: [
      {
        address: DEPLOY_CONFIG.contractAddress,
        fromBlock: '0x800D54', // converted decimal block number to hexadecimal
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
}

// archive converting to 32 bytes '0x' + web3.utils.padLeft(DEPLOY_CONFIG.contractAddress.replace('0x', ''), 64)
