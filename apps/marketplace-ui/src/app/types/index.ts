import { Dispatch } from "react"

export interface ModalProps {
    title: string,
    fnOk: () => void,
    fnClose: () => void,
    children: JSX.Element
}

export interface IAppContext {
    injectedWeb3: any,
    userAccount: string,
    modal: {
        open: boolean,
        message: JSX.Element
    },
    handleConnectWallet: () => void,
    uploadNFTToIPFS: (nft: NFT) => (dispatch: Dispatch<any>) => Promise<void>,
    dispatch: Dispatch<any>
}

export interface ActionPayloadTypes {
    FETCH_NFT_LIST_REQUEST: undefined,
    FETCH_NFT_LIST_SUCCESS: NFT[],
    FETCH_NFT_LIST_FAILURE: string,
    UPLOAD_NFT_TO_IPFS_REQUEST: undefined,
    UPLOAD_NFT_TO_IPFS_SUCCESS: NFT,
    UPLOAD_NFT_TO_IPFS_FAILURE: string
}


export interface Action <T extends keyof ActionPayloadTypes> {
  type: T
  payload: ActionPayloadTypes[T]
}

export type Actions = { [A in keyof ActionPayloadTypes]: Action<A> }[keyof ActionPayloadTypes]

export interface AppState {
    nft: {
        nftList: NFT[],
        requesting: boolean,
        error: string
    }
}

export type NFT = {
    name: string,
    description: string,
    image: File,
    price: string
    contactAddress: string,
    owner: string,
    hash?: string
}