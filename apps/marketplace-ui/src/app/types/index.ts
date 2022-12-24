export interface ModalProps {
    title: string,
    fnOk: () => void,
    fnClose: () => void,
    children: any
}

export interface IAppContext {
    injectedWeb3: any,
    userAccount: string,
    modal: {
        open: boolean,
        message: string
    },
    handleConnectWallet: () => void
}

export interface ActionPayloadTypes {
    FETCH_NFT_LIST_REQUEST: string,
    FETCH_NFT_LIST_SUCCESS: string[],
    FETCH_NFT_LIST_FAILURE: string,
    UPLOAD_NFT_TO_IPFS_REQUEST: string,
    UPLOAD_NFT_TO_IPFS_SUCCESS: string,
    UPLOAD_NFT_TO_IPFS_FAILURE: string
}


export interface Action <T extends keyof ActionPayloadTypes> {
  type: T
  payload: ActionPayloadTypes[T]
}

export type Actions = Action<'FETCH_NFT_LIST_REQUEST'> | Action<'FETCH_NFT_LIST_SUCCESS'> | Action<'FETCH_NFT_LIST_FAILURE'> | Action<'UPLOAD_NFT_TO_IPFS_REQUEST'> | Action<'UPLOAD_NFT_TO_IPFS_SUCCESS'> | Action<'UPLOAD_NFT_TO_IPFS_FAILURE'>

export interface AppState {
    nft: {
        nftList: {
            id: string,
            name: string,
            description: string,
            image: string,
            price: number,
            owner: string
        }[],
        requesting: boolean,
        error: string
    }
}