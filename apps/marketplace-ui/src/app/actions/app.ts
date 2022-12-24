import { Dispatch } from "react"
import { create } from "ipfs-http-client"
import { dispatchNFTUploadRequest } from "./dispatch"

const infuraConfig = { host: 'ipfs.infura.io', port: 5001, protocol: 'https' }
const ipfs = create(infuraConfig)

// export const uploadNFTToIPFS = (nft: NFT) => async (dispatch: Dispatch<any>) => {
//     dispatchNFTUploadRequest()(dispatch)
//     try {
//         const ipfs = await getIPFS()
//         const cid = await ipfs.add(nft)
//         dispatch({ type: 'UPLOAD_NFT_TO_IPFS_SUCCESS', payload: { age: 18 } })
//     } catch (error: any) {
//         dispatch({ type: ActionTypes.UPLOAD_NFT_TO_IPFS_FAILURE, payload: error.message })
//     }
// }