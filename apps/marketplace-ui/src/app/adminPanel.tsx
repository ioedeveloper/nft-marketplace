import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNFTList, verifyNFT } from "./actions/app";
import { DEPLOY_CONFIG } from "./config/deploy";
import { AppContext } from "./contexts";

export function AdminPanel() {
    const [approveId, setApproveId] = useState<string>()
    const { dispatch, userAccount, setOpenModal, setModalMessage, appState } = useContext(AppContext)

    useEffect(() => {
        if (userAccount) {
            if (userAccount !== DEPLOY_CONFIG.owner) {
                setModalMessage(<span>Unauthorized Access: You must connect your admin eth address via metamask to access admin priviledges.</span>)
                setOpenModal(true)
            } else {
                if (appState.nft.nftList.length < 1) {
                    fetchNFTList()(dispatch)
                }
            }
        }
    }, [userAccount])

    const handleApproveClick = async (id: string) => {
        try {
            setApproveId(id)
            await verifyNFT(id)(dispatch)
        } catch (error) {
            setModalMessage(<span>Approval Failed: Please make sure you have the necessary permissions to approve NFTs and try again.</span>)
            setOpenModal(true)
        }
    }

    return (
        <>
            {/* <!-- start page title area --> */}
        <div className="rn-breadcrumb-inner ptb--30">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h5 className="title text-center text-md-start">Admin Panel</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <ul className="breadcrumb-list">
                            <li><Link to='/'>Home</Link></li>
                            <li className="separator"><i className="feather-chevron-right"></i></li>
                            <li className="item current">Admin Panel</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- end page title area --> */}
        {
            userAccount !== DEPLOY_CONFIG.owner ?
                <div className="rn-page-wrapper">
                    <div className="rn-section-gapTop">
                        <div className="container">
                            <div className="alert alert-danger d-flex justify-content-between" role="alert">
                                <span className="pt--10"><strong>Unauthorized Access: You must connect your admin eth address via metamask to access admin priviledges.</strong></span>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="rn-upcoming-area rn-section-gap">
                    <div className="rn-page-wrapper">
                        <div className="rn-section-gapTop">
                            <div className="container">
                                <div className="alert alert-info d-flex justify-content-between" role="alert">
                                    <span className="pt--10"><strong>NOTE: Ensure that you verify the authenticity of an artwork submitted before approving the NFT to protect buyers.</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* <!-- start Table Title --> */}
                                <div className="table-title-area d-flex">
                                    <i data-feather="calendar"></i>
                                    <h3>All Artworks NFT Listing</h3>
                                </div>
                                {/* <!-- End Table Title --> */}

                                {/* <!-- table area Start --> */}

                                <div className="box-table table-responsive">
                                    <table className="table upcoming-projects">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <span>Title</span>
                                                </th>
                                                <th>
                                                    <span>Description</span>
                                                </th>
                                                <th>
                                                    <span>Owner</span>
                                                </th>
                                                <th>
                                                    <span>Price</span>
                                                </th>
                                                <th>
                                                    <span>Action</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                appState.nft.nftList.map((nft, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td><span>{nft.name}</span></td>
                                                            <td><span>{(nft.description.length > 50) ? nft.description.slice(0, 49) + '...' : nft.description }</span></td>
                                                            <td><span>{nft.owner}</span></td>
                                                            <td><span className="color-info">{nft.price} ETH</span></td>
                                                            <td>{ nft.verified ? <a href="#" className="badge badge-success text-success">Verified</a> : <button className="btn btn-success" onClick={() => handleApproveClick(nft.id!)}>{ approveId !== nft.id ? 'Approve' : 'Pending...' }</button>}&nbsp;<Link to={`/view-details/${index}`}><button className="btn btn-info">View</button></Link></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                {/* <!-- table End --> */}
                            </div>
                        </div>
                    </div>
                </div>
        }
    </>
  );
}

export default AdminPanel;
