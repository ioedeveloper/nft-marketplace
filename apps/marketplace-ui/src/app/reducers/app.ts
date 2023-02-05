import { Actions, AppState } from "../types"

export const appInitialState: AppState = {
    nft: {
        nftList: [],
        requesting: false,
        error: ''
    },
    marketplace: {
        approved: false,
        requesting: false,
        error: ''
    }
}

export const appReducer = (state = appInitialState, action: Actions): AppState => {
    switch (action.type) {
        case 'FETCH_NFT_LIST_REQUEST':
            return {
                ...state,
                nft: {
                    ...state.nft,
                    requesting: true
                }
            }

        case 'FETCH_NFT_LIST_SUCCESS':
            return {
                ...state,
                nft: {
                    ...state.nft,
                    nftList: action.payload,
                    requesting: false
                }
            }
        
        case 'FETCH_NFT_LIST_FAILURE':
            return {
                ...state,
                nft: {
                    ...state.nft,
                    error: action.payload,
                    requesting: false
                }
            }

        case 'UPLOAD_NFT_TO_IPFS_REQUEST':
            return {
                ...state,
                nft: {
                    ...state.nft,
                    requesting: true,
                }
            }

        case 'UPLOAD_NFT_TO_IPFS_SUCCESS':
            return {
                ...state,
                nft: {
                    ...state.nft,
                    requesting: false,
                    nftList: [...state.nft.nftList, action.payload],
                }
            }
        
        case 'UPLOAD_NFT_TO_IPFS_FAILURE':
            return {
                ...state,
                nft: {
                    ...state.nft,
                    requesting: false,
                    error: action.payload
                }
            }
        
        case 'APPROVE_MARKETPLACE_REQUEST':
            return {
                ...state,
                marketplace: {
                    ...state.marketplace,
                    requesting: true
                }
            }
        
        case 'APPROVE_MARKETPLACE_SUCCESS':
            return {
                ...state,
                marketplace: {
                    ...state.marketplace,
                    approved: true,
                    requesting: false
                }
            }

        case 'APPROVE_MARKETPLACE_FAILURE':
            return {
                ...state,
                marketplace: {
                    ...state.marketplace,
                    error: action.payload,
                    requesting: false
                }
            }

        default:
            throw new Error()
    }
}
