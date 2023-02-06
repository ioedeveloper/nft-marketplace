import { Dispatch } from "react"

export interface ModalProps {
    title: string,
    fnOk: () => void,
    fnClose: () => void,
    children: JSX.Element
}

export interface IAppContext {
    userAccount: string,
    appState: AppState,
    setOpenModal: (open: boolean) => void,
    setOpenTransferModal: (open: boolean) => void,
    setModalMessage: (message: JSX.Element) => void,
    setTransferId: (id: string) => void,
    handleConnectWallet: () => void,
    uploadNFTToIPFS: (nft: NFT) => (dispatch: Dispatch<any>) => Promise<void>,
    fetchNFTList: (limit?: number) => (dispatch: Dispatch<any>) => Promise<void>,
    authorizeMarketplace: () => (dispatch: Dispatch<any>) => Promise<void>,
    dispatch: Dispatch<any>
}

export interface ActionPayloadTypes {
    FETCH_NFT_LIST_REQUEST: undefined,
    FETCH_NFT_LIST_SUCCESS: NFT[],
    FETCH_NFT_LIST_FAILURE: string,
    UPLOAD_NFT_TO_IPFS_REQUEST: undefined,
    UPLOAD_NFT_TO_IPFS_SUCCESS: NFT,
    UPLOAD_NFT_TO_IPFS_FAILURE: string,
    APPROVE_MARKETPLACE_REQUEST: undefined,
    APPROVE_MARKETPLACE_SUCCESS: undefined,
    APPROVE_MARKETPLACE_FAILURE: string
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
    },
    marketplace: {
        approved: boolean,
        requesting: boolean,
        error: string
    }
}

export type NFT = {
    id?: string,
    name: string,
    description: string,
    image?: File,
    price: string,
    contactAddress: string,
    owner: string,
    hash?: string,
    verified?: boolean,
    txnHash?: string
}

export type NFTCardProps = {
    index: number,
    nft: NFT
}