import { Dispatch } from "react"

export interface ModalProps {
    title: string,
    fnOk: () => void,
    fnClose: () => void,
    fnTitle?: string,
    children: JSX.Element
}

export interface IAppContext {
    userAccount: string,
    appState: AppState,
    setOpenModal: (open: boolean) => void,
    setOpenTransferModal: (open: boolean) => void,
    setOpenApprovalModal: (open: boolean) => void,
    setModalMessage: (message: JSX.Element) => void,
    setTransferId: (id: string) => void,
    handleConnectWallet: () => void,
    dispatch: Dispatch<any>
}

export interface ActionPayloadTypes {
    FETCH_NFT_LIST_REQUEST: undefined,
    FETCH_NFT_LIST_SUCCESS: NFT[],
    FETCH_NFT_LIST_FAILURE: string,
    UPLOAD_NFT_TO_IPFS_REQUEST: undefined,
    UPLOAD_NFT_TO_IPFS_SUCCESS: NFT,
    UPLOAD_NFT_TO_IPFS_FAILURE: string,
    MARKETPLACE_REQUEST: undefined,
    MARKETPLACE_APPROVED: undefined,
    MARKETPLACE_FAILURE: string,
    BUY_NFT: { id: string, owner: string }
    TRANSFER_NFT: { id: string, owner: string }
    VERIFY_NFT: string,
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