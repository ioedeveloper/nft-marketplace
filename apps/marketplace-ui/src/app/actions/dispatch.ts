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

export const dispatchNFTFetchRequest = () => (dispatch: Dispatch<Action<'FETCH_NFT_LIST_REQUEST'>>) => {
    dispatch({ type: 'FETCH_NFT_LIST_REQUEST', payload: undefined })
}

export const dispatchNFTFetchSuccess = (data: NFT[]) => (dispatch: Dispatch<Action<'FETCH_NFT_LIST_SUCCESS'>>) => {
    dispatch({ type: 'FETCH_NFT_LIST_SUCCESS', payload: data })
}

export const dispatchNFTFetchFailure = (error: string) => (dispatch: Dispatch<Action<'FETCH_NFT_LIST_FAILURE'>>) => {
    dispatch({ type: 'FETCH_NFT_LIST_FAILURE', payload: error })
}

export const dispatchApproveMarketplaceRequest = () => (dispatch: Dispatch<Action<'APPROVE_MARKETPLACE_REQUEST'>>) => {
    dispatch({ type: 'APPROVE_MARKETPLACE_REQUEST', payload: undefined })
}

export const dispatchApproveMarketplaceSuccess = () => (dispatch: Dispatch<Action<'APPROVE_MARKETPLACE_SUCCESS'>>) => {
    dispatch({ type: 'APPROVE_MARKETPLACE_SUCCESS', payload: undefined })
}

export const dispatchApproveMarketplaceFailure = (error: string) => (dispatch: Dispatch<Action<'APPROVE_MARKETPLACE_FAILURE'>>) => {
    dispatch({ type: 'APPROVE_MARKETPLACE_FAILURE', payload: error })
}
