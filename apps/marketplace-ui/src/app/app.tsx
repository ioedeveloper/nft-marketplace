import React, { useEffect, useState } from 'react'
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
import { uploadNFTToIPFS } from './actions/app'

const injectedWeb3 = window.ethereum

export function App() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [modalMessage, setModalMessage] = useState<string>('')
  const [userAccount, setUserAccount] = useState<string>('')

  useEffect(() => {
    handleConnectWallet()
  }, [])

  const handleConnectWallet = async () => {
    try {
        const accounts = await injectedWeb3.request({ method: 'eth_requestAccounts' })
    
        setUserAccount(accounts[0])
    } catch (error) {
        setModalMessage('No Web3 provider detected. Please install metamask extension on your browser and connect wallet.')
        setOpenModal(true)
    }
  }

  const value = {
    injectedWeb3,
    userAccount,
    modal: { open: openModal, message: modalMessage },
    handleConnectWallet,
    uploadNFTToIPFS
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
            <Route path='/view-details' element={<ViewDetails />} />
            <Route path='/admin-panel' element={<AdminPanel />} />
          </Routes>
          <Footer />
        </React.Fragment>
      </Router>
      {
          openModal && <Modal title='Notification' fnClose={() => setOpenModal(false) } fnOk={() => { setOpenModal(false) }}>{ modalMessage }</Modal>
      }
    </AppContext.Provider>
  )
}

export default App;
