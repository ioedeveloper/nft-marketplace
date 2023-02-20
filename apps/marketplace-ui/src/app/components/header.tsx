import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { shortenAddress } from '../utils'
import { AppContext } from '../contexts'

export function Header() {
    const { userAccount, handleConnectWallet } = useContext(AppContext)
    return (
        <header className="rn-header haeder-default header--sticky">
            <div className="container">
                <div className="header-inner">
                    <div className="header-left">
                        <div className="logo-thumbnail logo-custom-css d-inline-flex">
                            <h4>JOS Museum</h4>&nbsp;&nbsp;
                            <h4>Marketplace</h4>
                        </div>
                        <div className="mainmenu-wrapper">
                            <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                                {/* <!-- Start Mainmanu Nav --> */}
                                <ul className="mainmenu">
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/collection'>Our Collection</Link></li>
                                    <li><Link to='/create'>Sell NFT</Link></li>
                                    <li><Link to='/admin-panel'>Admin</Link></li>
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
                                { userAccount ? <a href={`https://goerli.etherscan.io/address/${userAccount}`}>Address: {shortenAddress(userAccount)}</a> : <button id="connectbtn" className="btn btn-primary-alta btn-small" onClick={handleConnectWallet}>Connect Wallet</button> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
