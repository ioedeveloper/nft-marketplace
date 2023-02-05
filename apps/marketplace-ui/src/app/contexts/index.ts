import { ethers } from 'ethers'
import { createContext } from 'react'
import { IAppContext } from '../types'

declare global {
    interface Window {
        ethereum: any,
        web3Provider: ethers.providers.Web3Provider
    }
}

export const AppContext = createContext<IAppContext>({} as IAppContext)
