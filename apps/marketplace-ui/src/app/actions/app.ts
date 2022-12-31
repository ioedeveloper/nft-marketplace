import { Dispatch } from "react"
import { create } from "ipfs-http-client"
import { Buffer } from "buffer"
import { dispatchNFTUploadFailure, dispatchNFTUploadRequest, dispatchNFTUploadSuccess } from "./dispatch"
import { NFT } from "../types"

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

        nft.hash = hash
        console.log('nft: ', nft)
        dispatchNFTUploadSuccess(nft)(dispatch)
    } catch (error: any) {
        dispatchNFTUploadFailure(error.message)(dispatch)
    }
}