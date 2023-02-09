import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { buyNFT, fetchNFTList } from "./actions/app";
import { NFTCard } from "./components/nft-card";
import NFTPlaceholder from "./components/placeholder";
import { AppContext } from "./contexts";

export function ViewDetails() {
    const { dispatch, appState, userAccount, setOpenApprovalModal, setTransferId, setOpenTransferModal } = useContext(AppContext)
    const { id } = useParams()
    const nftIndex = parseInt(id!)
    const nft = appState.nft.nftList[nftIndex]
    const [pending, setPending] = useState<boolean>(false)

    useEffect(() => {
        if (!nft) fetchNFTList()(dispatch)
    }, [])

    const handleBuyNFT = async () => {
        if (!appState.marketplace.approved) {
            setOpenApprovalModal(true)
        } else {
            setPending(true)
            await buyNFT(nft, userAccount)(dispatch)
            setPending(false)
        }
    }

    const handleTransferNFT = async () => {
        if (!appState.marketplace.approved) {
            setOpenApprovalModal(true)
        } else {
            setTransferId(nft.id!)
            setOpenTransferModal(true)
        }
    }

    return nft ? (
        <div>
            {
            !nft.verified &&
                <div className="rn-page-wrapper">
                    <div className="rn-section-gapTop">
                        <div className="container">
                            <div className="alert alert-danger d-flex justify-content-between" role="alert">
                                <span><strong>Warning: This NFT is Unverified. Only buy NFTs that have been verified by the admin to ensure the authenticity and legitimacy of the transaction. Unverified NFTs may result in financial loss and should be avoided.</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="product-details-area rn-section-gapTop">
                <div className="container">
                    <div className="row g-5">
                        {/* <!-- product image area --> */}

                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="product-tab-wrapper rbt-sticky-top-adjust">
                                <div className="pd-tab-inner">
                                    <div className="tab-content rn-pd-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <img src={`https://ipfs.io/ipfs/${nft.hash}`} style={{ maxHeight: 500 }} alt="Nft_Profile" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- product image area end --> */}

                        <div className="col-lg-7 col-md-12 col-sm-12 mt_md--50 mt_sm--60 pt-3">
                            <div className="rn-pd-content-area">
                                <div className="pd-title-area">
                                    <h4 className="title">Name: {nft.name }</h4>
                                </div>
                                <p>
                                    {nft.description}
                                </p>
                                <div className="catagory-collection">
                                    <div className="collection">
                                        <span className="d-block"><strong>Owner: </strong><a className="text-decoration-underline" href={`https://goerli.etherscan.io/address/${nft.owner}`}>{nft.owner}</a></span>
                                        <span><strong>View on etherscan</strong> <a className="text-decoration-underline" href={`https://goerli.etherscan.io/tx/${nft.txnHash}`}>https://goerli.etherscan.io/tx/{nft.txnHash}</a></span>
                                    </div>
                                </div>
                                <span className="bid">Price <span className="price">{nft.price}ETH</span></span>
                                { nft.verified ? <a href="#" className="badge badge-success text-success">Verified</a> : <span className="badge badge-danger text-danger">NFT is Unverified</span> }
                                <div>
                                    { userAccount !== nft.owner && <button onClick={handleBuyNFT} type="button" className="btn btn-primary-alta mt--30 mr--30" data-bs-toggle="modal" data-bs-target="#placebidModal" disabled={pending}>{ pending ? 'Pending...' : 'BUY' }</button> }
                                    { userAccount === nft.owner && <button onClick={handleTransferNFT} type="button" className="btn btn-primary-alta mt--30 mr--30" data-bs-toggle="modal" data-bs-target="#placebidModal" disabled={pending}>Transfer Ownership</button> }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- End product details area --> */}
            {
                appState.nft.nftList.length > 1 &&
                <div className="rn-new-items rn-section-gapTop pb-5">
                    <div className="container">
                        <div className="row mb--50 align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <h3 className="title mb--0">More NFTs</h3>
                            </div>
                        </div>
                        <div className="row g-5">
                            { appState.nft.nftList.map((nft, index) => (index < 5) && (index !== nftIndex) && <NFTCard key={index} nft={nft} index={index} /> )}
                        </div>
                    </div>
                </div>
            }
        </div>
    ) : (
        <div className="product-details-area rn-section-gapTop">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="product-tab-wrapper rbt-sticky-top-adjust">
                            <NFTPlaceholder />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDetails;
