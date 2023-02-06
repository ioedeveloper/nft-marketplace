
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts'
import { NFTCardProps } from '../types'

export function NFTCard (props: NFTCardProps) {
    const { dispatch, appState, userAccount, setTransferId, setOpenTransferModal } = useContext(AppContext)
    const { index, nft } = props

    return (
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
                    { userAccount !== nft.owner ?
                        <div className="react-area border border-info">
                            <span className="number">BUY</span>
                            { nft.verified ? <a href="#" className="badge badge-success text-success">Verified</a> : <span className="badge badge-danger text-danger">Unverified</span> }
                        </div> :
                        <div className="react-area border border-info" onClick={() => {
                            setTransferId(nft.id!)
                            setOpenTransferModal(true)
                        }}>
                            <span className="number">Transfer</span>
                            { nft.verified ? <a href="#" className="badge badge-success text-success">Verified</a> : <span className="badge badge-danger text-danger">Unverified</span> }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}