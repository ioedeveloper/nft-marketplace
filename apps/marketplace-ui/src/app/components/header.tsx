import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from './modal'

declare global {
    interface Window {
        ethereum: any
    }
}

export function Header() {
    const injectedWeb3 = window.ethereum
    const [showModal, setSetShowModal] = useState<boolean>(false)

    const handleConnect = () => {
        if (injectedWeb3) {
            injectedWeb3.request({ method: 'eth_requestAccounts' })
        } else {
            setSetShowModal(true)
        }
    }
      
    return (
        <>
            {
                showModal && <Modal title='Notification' fnClose={() => setSetShowModal(false) } fnOk={() => { setSetShowModal(false) }}>
                    {
                        !injectedWeb3 && <p>No Web3 provider detected. Please install metamask and connect wallet.</p>
                    }
                </Modal>
            }
            <header className="rn-header haeder-default header--sticky">
                <div className="container">
                    <div className="header-inner">
                        <div className="header-left">
                            <div className="logo-thumbnail logo-custom-css d-inline-flex">
                                <a className="logo-light" href="/"><img src="assets/images/logo.png" alt="nft-logo" /></a>
                                <a className="logo-dark" href="/"><img src="assets/images/logo.png" alt="nft-logo" /></a>
                                <h4>FT Marketplace</h4>
                            </div>
                            <div className="mainmenu-wrapper">
                                <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                                    {/* <!-- Start Mainmanu Nav --> */}
                                    <ul className="mainmenu">
                                        <li><Link to='/'>Home</Link></li>
                                        <li><Link to='/collection'>Our Collection</Link></li>
                                        <li><Link to='/create'>Sell NFT</Link></li>
                                    </ul>
                                    {/* <!-- End Mainmanu Nav --> */}
                                </nav>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="setting-option rn-icon-list d-block d-lg-none">
                                <div className="icon-box search-mobile-icon">
                                    <button><i className="feather-search"></i></button>
                                </div>
                                <form id="header-search-1" action="#" method="GET" className="large-mobile-blog-search">
                                    <div className="rn-search-mobile form-group">
                                        <button type="submit" className="search-button"><i className="feather-search"></i></button>
                                        <input type="text" placeholder="Search ..." />
                                    </div>
                                </form>
                            </div>

                            <div className="setting-option header-btn rbt-site-header" id="rbt-site-header">
                                <div className="icon-box">
                                    { 
                                        typeof window.ethereum !== 'undefined' ? '0x...adx' :
                                        <button id="connectbtn" className="btn btn-primary-alta btn-small" onClick={handleConnect}>Connect Wallet</button> 
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
