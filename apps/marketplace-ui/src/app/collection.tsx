import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NFTPlaceholder from "./components/placeholder";
import { AppContext } from "./contexts";

export function Collection() {
    const { dispatch, fetchNFTList, appState } = useContext(AppContext)

    useEffect(() => {
        if (appState.nft.nftList.length < 50) fetchNFTList(50)(dispatch)
    }, [])
    
    return (
        <>
        {/* <!-- start page title area --> */}
        <div className="rn-breadcrumb-inner ptb--30">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h5 className="title text-center text-md-start">Our Collection</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <ul className="breadcrumb-list">
                            <li className="item"><Link to='/'>Home</Link></li>
                            <li className="separator"><i className="feather-chevron-right"></i></li>
                            <li className="item current">Collection</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* // <!-- end page title area --> */}
        {/* // <!-- collection area Start --> */}
        <div className="rn-collection-area rn-section-gapTop">
            <div className="container">
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
                                { appState.nft.nftList.map((nft, index) => index < 50 && (
                                        <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="product-style-one no-overlay">
                                                <div className="card-thumbnail">
                                                    <Link to={`/view-details/${index}`}><img src={`https://ipfs.io/ipfs/${nft.hash}`} alt="NFT_portfolio" /></Link>
                                                </div>
                                                <div className='py-3'>
                                                    <Link to={`/view-details/${index}`}><span className="product-name">{nft.name}</span></Link>
                                                </div>
                                                <div className="bid-react-area">
                                                    <div className="last-bid">{nft.price}ETH</div>
                                                    <div className="react-area border border-info">
                                                        <span className="number">BUY</span>
                                                        { nft.verified ? <a href="#" className="badge badge-success text-success">Verified</a> : <span className="badge badge-danger text-danger">Unverified</span> }
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
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="pagination-wrapper" aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><Link className="page-link" to='/'>Previous</Link></li>
                                <li className="page-item"><Link className="page-link" to='/'>Next</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Collection
