import React, { useEffect, useReducer, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminPanel from './adminPanel'
import Collection from './collection'
import Footer from './components/footer'
import Header from './components/header'
import CreateNFT from './create'
import Home from './home'
import ViewDetails from './viewDetails'
import './css/app.css'
import { AppContext } from './contexts'
import { Modal } from './components/modal'
import { authorizeMarketplace, checkMarketplaceAuthorization, fetchNFTList, transferNFT, uploadNFTToIPFS } from './actions/app'
import { appInitialState, appReducer } from './reducers/app'

export function App() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [openTransferModal, setOpenTransferModal] = useState<boolean>(false)
  const [modalMessage, setModalMessage] = useState<JSX.Element>(<></>)
  const [userAccount, setUserAccount] = useState<string>('')
  const [transferAddress, setTransferAddress] = useState<string>('')
  const [transferId, setTransferId] = useState<string>('')
  const [appState, dispatch] = useReducer(appReducer, appInitialState)

  useEffect(() => {
    handleConnectWallet()
    checkMarketplaceAuthorization()(dispatch)
  }, [])

  useEffect(() => {
    if (appState.nft.error) {
      setModalMessage(<span>{appState.nft.error}</span>)
      setOpenModal(true)
    } else if (appState.marketplace.error) {
      setModalMessage(<span>{appState.marketplace.error}</span>)
      setOpenModal(true)
    }
  }, [appState.nft.error, appState.marketplace.error])

  const handleConnectWallet = async () => {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    
        setUserAccount(accounts[0])
    } catch (error) {
        setModalMessage(<span>No Web3 provider detected. Please install metamask extension on your browser and connect wallet.</span>)
        setOpenModal(true)
    }
  }

  const handleTransferNFT = async () => {
    try {
      await transferNFT(userAccount, transferId, transferAddress)(dispatch)
      setOpenTransferModal(false)
      setModalMessage(<span>NFT successfully transferred to {transferAddress}</span>)
      setOpenModal(true)
    } catch (error: any) {
      setModalMessage(<span>{error.message}</span>)
      setOpenModal(true)
    }
  }

  const value = {
    userAccount,
    setOpenModal,
    setModalMessage,
    setOpenTransferModal,
    setTransferId,
    handleConnectWallet,
    uploadNFTToIPFS,
    fetchNFTList,
    authorizeMarketplace,
    appState,
    dispatch
  }
  
  return (
    <AppContext.Provider value={value}>
      <Router>
        <React.Fragment>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/create' element={<CreateNFT />} />
            <Route path='/view-details/:id' element={<ViewDetails />} />
            <Route path='/admin-panel' element={<AdminPanel />} />
          </Routes>
          <Footer />
        </React.Fragment>
      </Router>
      { openModal && <Modal title='Notification' fnClose={() => setOpenModal(false) } fnOk={() => { setOpenModal(false) }}>{ modalMessage }</Modal> }
      { openTransferModal && <Modal title='Transfer NFT' fnClose={() => setOpenTransferModal(false) } fnOk={handleTransferNFT}>
        <div>
          <span><strong>Paste recipient address: </strong></span>
          <div className='transfer-nft'>
            <input type='text' className='border-1 mt--15 mb--30' placeholder='Enter address' value={transferAddress} onChange={(e) => setTransferAddress(e.target.value)} style={{ fontSize: 12, border: '1px solid #acacac', borderRadius: 4 }} />
          </div>
        </div>
      </Modal> }
    </AppContext.Provider>
  )
}

export default App
