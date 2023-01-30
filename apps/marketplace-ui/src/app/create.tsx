import { useRef, useState, useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppContext } from "./contexts"
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export function CreateNFT() {
    const { userAccount, appState, setModalMessage, setOpenModal, handleConnectWallet, uploadNFTToIPFS, dispatch } = useContext(AppContext)
    const [imageFile, setImageFile] = useState<File>()
    const [backgroundImage, setBackgroundImage] = useState<string>("")
    const [artworkName, setArtworkName] = useState<string>("")
    const [artworkDescription, setArtworkDescription] = useState<string>("")
    const [artworkPrice, setArtworkPrice] = useState<string>("")
    const [contactAddress, setContactAddress] = useState<string>("")
    const imageRef = useRef<HTMLInputElement>(null)

    const handleImageChange = () => {
        const currentFiles = imageRef.current?.files

        if (currentFiles && currentFiles.length > 0) {
            const imageFile = currentFiles[0]

            setImageFile(imageFile)
            setBackgroundImage(URL.createObjectURL(imageFile))
        }
    }

    const handleArtworkNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArtworkName(event.target.value)
    }

    const handleArtworkDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setArtworkDescription(event.target.value)
    }

    const handleArtworkPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArtworkPrice(event.target.value)
    }

    const handleContactAddressChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContactAddress(event.target.value)
    }
    const handleSaveNFT = async (e: any) => {
        e.preventDefault()
        const ownerAddress = userAccount

        if (ownerAddress) {
            try {
                imageFile && await uploadNFTToIPFS({
                    owner: ownerAddress,
                    name: artworkName,
                    description: artworkDescription,
                    price: artworkPrice,
                    contactAddress,
                    image: imageFile
                })(dispatch)
                setModalMessage(<span>Artwork successfully uploaded to IPFS</span>)
                setOpenModal(true)
            } catch {
                console.log("Error uploading NFT to IPFS")
            }
        } else {
            handleConnectWallet()
        }
    }

  return (
    <>
        {/* <!-- start page title area --> */}
        <div className="rn-breadcrumb-inner ptb--30">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h5 className="title text-center text-md-start">Submit an Artwork for Listing</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <ul className="breadcrumb-list">
                            <li className="item"><a href="index.html">Home</a></li>
                            <li className="separator"><i className="feather-chevron-right"></i></li>
                            <li className="item current">Sell NFT</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- end page title area --> */}
        {/* <!-- create new product area --> */}
        <div className="create-area rn-section-gapTop pb-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
                        {/* <!-- file upload area --> */}
                        <div className="upload-area">

                            <div className="upload-formate mb--30">
                                <h6 className="title">
                                    Upload file
                                </h6>
                                <p className="formate">
                                    Choose your file to upload
                                </p>
                            </div>

                            <div className="brows-file-wrapper" style={{ backgroundImage: `url("${backgroundImage}")`, backgroundSize: '100%' }}>
                                {/* <!-- actual upload which is hidden --> */}
                                <input name="createinputfile" id="createinputfile" ref={imageRef} type="file" className="inputfile" onChange={handleImageChange} />
                                {/* <!-- our custom upload button --> */}
                                <label htmlFor="createinputfile" title="No File Choosen">
                                    <i className="feather-upload"></i>
                                    <span className="text-center">Click to choose a File</span>
                                    <p className="text-center mt--10">PNG, GIF, WEBP, MP4 or MP3. <br />    Max 1Gb.</p>
                                </label>
                            </div>
                        </div>
                        {/* <!-- end upoad file area --> */}

                        {/* <div className="mt--100 mt_sm--30 mt_md--30 d-none d-lg-block">
                            <h5> Note: </h5>
                            <span> Service fee : <strong>2.5%</strong> </span> <br />
                        </div> */}

                    </div>

                    <div className="col-lg-7">
                        <div className="form-wrapper-one">
                            <form className="row" action="#">

                                <div className="col-md-12">
                                    <div className="input-box pb--20">
                                        <label htmlFor="name" className="form-label">Artwork Name</label>
                                        <input id="name" placeholder="e. g. `Digital Awesome Game`" onChange={handleArtworkNameChange} value={artworkName} />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="input-box pb--20">
                                        <label htmlFor="Description" className="form-label">Description</label>
                                        <textarea id="Description" rows={3} onChange={handleArtworkDescriptionChange} value={artworkDescription} placeholder="e. g. “After purchasing the artwork you can get item...”"></textarea>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="input-box pb--20">
                                        <label htmlFor="dollerValue" className="form-label">Item Price in ETH</label>
                                        <input id="dollerValue" onChange={handleArtworkPriceChange} value={artworkPrice} placeholder="e. g. `0.5`" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="input-box pb--20">
                                        <label htmlFor="contact" className="form-label">Contact Address Info for Artwork Verification</label>
                                        <textarea id="Description" onChange={handleContactAddressChange} value={contactAddress} rows={3} placeholder="e.g `Shop 15, ... Nigeria"></textarea>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="input-box">
                                        <button className="btn btn-primary btn-large w-100" onClick={handleSaveNFT} disabled={appState.nft.requesting}>{ !appState.nft.requesting ? 'Submit Item' : <FontAwesomeIcon icon={icon({name: 'ellipsis', style: 'solid' })} beat /> }</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- create new product area --> */}
    </>
  )
}

export default CreateNFT

