import { Dispatch } from "react"
import { create } from "ipfs-http-client"
import { dispatchNFTUploadFailure, dispatchNFTUploadRequest, dispatchNFTUploadSuccess } from "./dispatch"
import { NFT } from "../types"

const infuraConfig = { host: 'ipfs.infura.io', port: 5001, protocol: 'https' }
const ipfs = create(infuraConfig)

export const uploadNFTToIPFS = (nft: NFT) => async (dispatch: Dispatch<any>) => {
    dispatchNFTUploadRequest()(dispatch)
    try {
        const cid = await ipfs.add(nft.image)
        const hash = cid.path

        nft.hash = hash
        dispatchNFTUploadSuccess(nft)(dispatch)
        console.log('nft: ', nft)
    } catch (error: any) {
        dispatchNFTUploadFailure(error.message)(dispatch)
    }
}