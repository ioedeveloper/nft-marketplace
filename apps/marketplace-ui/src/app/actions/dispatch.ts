import { Dispatch } from "react";
import { Action, NFT } from "../types";

export const dispatchNFTUploadRequest = () => (dispatch: Dispatch<Action<'UPLOAD_NFT_TO_IPFS_REQUEST'>>) => {
    dispatch({ type: 'UPLOAD_NFT_TO_IPFS_REQUEST', payload: undefined })
}

export const dispatchNFTUploadSuccess = (data: NFT) => (dispatch: Dispatch<Action<'UPLOAD_NFT_TO_IPFS_SUCCESS'>>) => {
    dispatch({ type: 'UPLOAD_NFT_TO_IPFS_SUCCESS', payload: data })
}

export const dispatchNFTUploadFailure = (error: string) => (dispatch: Dispatch<Action<'UPLOAD_NFT_TO_IPFS_FAILURE'>>) => {
    dispatch({ type: 'UPLOAD_NFT_TO_IPFS_FAILURE', payload: error })
}