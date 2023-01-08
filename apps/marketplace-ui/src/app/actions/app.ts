import { Dispatch } from "react"
import { create } from "ipfs-http-client"
import { Buffer } from "buffer"
import { ethers } from "ethers"
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
        console.log('called...')
        const cid = await ipfs.add(nft.image)
        const hash = cid.path
        const injectedWeb3 = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(DEPLOY_CONFIG.contractAddress, DEPLOY_CONFIG.contractABI, injectedWeb3.getSigner())
        
        console.log({ contract })
        nft.hash = hash
        const mintTx = await contract['publicMint'](nft.owner, nft.name, nft.price, nft.contactAddress, nft.description)
        console.log({ mintTx })
        await mintTx.wait()
        dispatchNFTUploadSuccess(nft)(dispatch)
    } catch (error: any) {
        console.log('error: ', error)
        dispatchNFTUploadFailure(error.message)(dispatch)
    }
}