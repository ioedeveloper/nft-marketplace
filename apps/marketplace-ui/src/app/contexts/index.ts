import { createContext } from 'react'

declare global {
    interface Window {
        ethereum: any
    }
}

interface IAppContext {
    injectedWeb3: any,
    userAccount: string,
    modal: {
        open: boolean,
        message: string
    },
    handleConnectWallet: () => void
}

export const AppContext = createContext<IAppContext>({} as IAppContext)
  
    