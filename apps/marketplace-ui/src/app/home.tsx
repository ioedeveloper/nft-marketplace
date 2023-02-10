// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './css/app.css'
import Banner from './components/banner'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AppContext } from './contexts'
import NFTPlaceholder from './components/placeholder'
import { NFTCard } from './components/nft-card'
import { fetchNFTList } from './actions/app'

export function Home() {
    const { dispatch, appState, userAccount } = useContext(AppContext)
    
    useEffect(() => {
        if (appState.nft.nftList.length === 0) fetchNFTList()(dispatch)
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
        <div className="rn-new-items rn-section-gapTop pb-5">
            <div className="container">
                <div className="row mb--50 align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <h3 className="title mb--0">{ appState.nft.requesting || (appState.nft.nftList.length) > 0 ? 'Our NFT Collection' : 'No NFT Available' }</h3>
                    </div>
                    {
                        appState.nft.nftList.length > 20 &&
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                            <div className="view-more-btn text-start text-sm-end">
                                <Link className="btn-transparent" to="/collection">VIEW ALL<i data-feather="arrow-right"></i></Link>
                            </div>
                        </div>
                    }
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
                        ) : appState.nft.nftList.map((nft, index) => index < 20 && <NFTCard key={index} index={index} nft={nft} />)
                    }
                </div>
            </div>
        </div>
    {/* <!-- New items End --> */}
    </>
  );
}

export default Home;
