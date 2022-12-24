import { Action, ActionPayloadTypes, Actions, AppState } from "../types"

export const appInitialState: AppState = {
    nft: {} as AppState['nft']
}

export const appReducer = (state = appInitialState, action: Actions): AppState => {
    if (action.type === 'FETCH_NFT_LIST_REQUEST') {
        return {
            ...state,
            nft: {
                ...state.nft,
                requesting: true
            }
        }
    }

    else if (action.type === 'FETCH_NFT_LIST_SUCCESS') {
        return {
            ...state,
            nft: {
                ...state.nft,
                nftList: action.payload,
                requesting: false
            }
        }
    }

    else if (action.type === 'FETCH_NFT_LIST_FAILURE') {
        return {
            ...state,
            nft: {
                ...state.nft,
                error: action.payload,
                requesting: false
            }
        }
    }
    
    else if (action.type === 'UPLOAD_NFT_TO_IPFS_REQUEST') {
        return {
            ...state,
            nft: {
                ...state.nft,
                requesting: true,
            }
        }
    }

    else if (action.type === 'UPLOAD_NFT_TO_IPFS_SUCCESS') {
        return {
            ...state,
            nft: {
                ...state.nft,
                requesting: false,
                nftList: [...state.nft.nftList, action.payload],
            }
        }
    }

    else if (action.type === 'UPLOAD_NFT_TO_IPFS_FAILURE') {
        return {
            ...state,
            nft: {
                ...state.nft,
                requesting: false,
                error: action.payload
            }
        }
    }
    
    else {
        throw new Error()
    } 
}
