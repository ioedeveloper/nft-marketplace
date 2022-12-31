import { createContext } from 'react'
import { IAppContext } from '../types'

declare global {
    interface Window {
        ethereum: any
    }
}

export const AppContext = createContext<IAppContext>({} as IAppContext)
