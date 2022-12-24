import { Dispatch } from "react";
import { Action } from "../types";

export const dispatchNFTUploadRequest = () => (dispatch: Dispatch<Action<'UPLOAD_NFT_TO_IPFS_REQUEST'>>) => {
    dispatch({ type: 'UPLOAD_NFT_TO_IPFS_REQUEST', payload: '' })
}

export const dispatchNFTUploadSuccess = (data: string) => (dispatch: Dispatch<Action<'UPLOAD_NFT_TO_IPFS_SUCCESS'>>) => {
    dispatch({ type: 'UPLOAD_NFT_TO_IPFS_SUCCESS', payload: data })
}