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

export const dispatchMarketplaceRequest = () => (dispatch: Dispatch<Action<'MARKETPLACE_REQUEST'>>) => {
    dispatch({ type: 'MARKETPLACE_REQUEST', payload: undefined })
}

export const dispatchMarketplaceApproved = () => (dispatch: Dispatch<Action<'MARKETPLACE_APPROVED'>>) => {
    dispatch({ type: 'MARKETPLACE_APPROVED', payload: undefined })
}

export const dispatchMarketplaceFailure = (error: string) => (dispatch: Dispatch<Action<'MARKETPLACE_FAILURE'>>) => {
    dispatch({ type: 'MARKETPLACE_FAILURE', payload: error })
}

export const dispatchBuyNFT = (id: string, newOwner: string) => (dispatch: Dispatch<Action<'BUY_NFT'>>) => {
    dispatch({ type: 'BUY_NFT', payload: { id, owner: newOwner }})
}

export const dispatchTransferNFT = (id: string, newOwner: string) => (dispatch: Dispatch<Action<'TRANSFER_NFT'>>) => {
    dispatch({ type: 'TRANSFER_NFT', payload: { id, owner: newOwner }})
}

export const dispatchVerifyNFT = (id: string) => (dispatch: Dispatch<Action<'VERIFY_NFT'>>) => {
    dispatch({ type: 'VERIFY_NFT', payload: id })
}
