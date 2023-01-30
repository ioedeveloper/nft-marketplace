// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './css/app.css'
import Banner from './components/banner'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AppContext } from './contexts'
import NFTPlaceholder from './components/placeholder'

export function Home() {
    const { fetchNFTList, dispatch, appState } = useContext(AppContext)
    
    useEffect(() => {
        fetchNFTList()(dispatch)
    }, [])

  return (
    <>
      <Banner />
    <div className="rn-service-area rn-section-gapTop">
        <div className="container">
            <div className="row">
                <div className="col-12 mb--50">
                    <h3 className="title">Create and sell your NFTs</h3>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rn-service-one color-shape-7">
                        <div className="inner">
                            <div className="icon">
                                <img src="assets/images/shape-7.png" alt="Shape" />
                            </div>
                            <div className="subtitle">Step-01</div>
                            <div className="content">
                                <h4 className="title"><a href="#">Set up your wallet</a></h4>
                                <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                            </div>
                        </div>
                        <a className="over-link" href="#"></a>
                    </div>
                </div>
                <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rn-service-one color-shape-5">
                        <div className="inner">
                            <div className="icon">
                                <img src="assets/images/shape-5.png" alt="Shape" />
                            </div>
                            <div className="subtitle">Step-02</div>
                            <div className="content">
                                <h4 className="title"><a href="#">Add your NFT's</a></h4>
                                <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                            </div>
                        </div>
                        <a className="over-link" href="#"></a>
                    </div>
                </div>
                <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rn-service-one color-shape-6">
                        <div className="inner">
                            <div className="icon">
                                <img src="assets/images/shape-6.png" alt="Shape" />
                            </div>
                            <div className="subtitle">Step-03</div>
                            <div className="content">
                                <h4 className="title"><a href="#">Sell Your NFT's</a></h4>
                                <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                            </div>
                        </div>
                        <a className="over-link" href="#"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End service area --> */}
    {/* <!-- New items Start --> */}
    <div className="rn-new-items rn-section-gapTop pb-5">
        <div className="container">
            <div className="row mb--50 align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h3 className="title mb--0">Our NFT Collection</h3>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                    <div className="view-more-btn text-start text-sm-end">
                        <Link className="btn-transparent" to="/collection">VIEW ALL<i data-feather="arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                {
                    appState.nft.requesting ? (
                        <>
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <NFTPlaceholder />
                            </div>
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <NFTPlaceholder />
                            </div>
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <NFTPlaceholder />
                            </div>
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <NFTPlaceholder />
                            </div>
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <NFTPlaceholder />
                            </div>
                        </>
                    ) : (
                        <>
                            { appState.nft.nftList.map((nft, index) => (
                                    <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-style-one no-overlay">
                                            <div className="card-thumbnail">
                                                <Link to="/view-details"><img src="assets/images/portfolio-02.jpg" alt="NFT_portfolio" /></Link>
                                            </div>
                                            <div className="product-share-wrapper">
                                                <div className="profile-share">
                                                    <Link to="/view-details" className="avatar" data-tooltip="Jone lee"><img src="assets/images/client-4.png" alt="Nft_Profile" /></Link>
                                                    <Link to="/view-details" className="avatar" data-tooltip="Nira Ara"><img src="assets/images/client-5.png" alt="Nft_Profile" /></Link>
                                                    <Link to="/view-details" className="avatar" data-tooltip="Fatima Afrafy"><img src="assets/images/client-6.png" alt="Nft_Profile" /></Link>
                                                </div>
                                                <div className="share-btn share-btn-activation dropdown">
                                                    <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"/>
                                                        </svg>
                                                    </button>
        
                                                    <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                        <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                            Share
                                                        </button>
                                                        <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                            Report
                                                        </button>
                                                    </div>
        
                                                </div>
                                            </div>
                                            <a href="product-details.html"><span className="product-name"></span></a>
                                            <div className="bid-react-area">
                                                <div className="last-bid"></div>
                                                <div className="react-area">
                                                    <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                        <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"/>
                                                    </svg>
                                                    <span className="number">420</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    )
                }
            </div>
        </div>
    </div>
    {/* <!-- New items End --> */}
    </>
  );
}

export default Home;
