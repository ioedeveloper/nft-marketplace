export function CreateNFT() {
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
                                    Drag or choose your file to upload
                                </p>
                            </div>

                            <div className="brows-file-wrapper">
                                {/* <!-- actual upload which is hidden --> */}
                                <input name="createinputfile" id="createinputfile" type="file" className="inputfile" />
                                <img id="createfileImage" src="assets/images/portfolio-05.jpg" data-black-overlay="6" />
                                {/* <!-- our custom upload button --> */}
                                <label htmlFor="createinputfile" title="No File Choosen">
                                    <i className="feather-upload"></i>
                                    <span className="text-center">Choose a File</span>
                                    <p className="text-center mt--10">PNG, GIF, WEBP, MP4 or MP3. <br />    Max 1Gb.</p>
                                </label>
                            </div>
                        </div>
                        {/* <!-- end upoad file area --> */}

                        <div className="mt--100 mt_sm--30 mt_md--30 d-none d-lg-block">
                            <h5> Note: </h5>
                            <span> Service fee : <strong>2.5%</strong> </span> <br />
                        </div>

                    </div>

                    <div className="col-lg-7">
                        <div className="form-wrapper-one">
                            <form className="row" action="#">

                                <div className="col-md-12">
                                    <div className="input-box pb--20">
                                        <label htmlFor="name" className="form-label">Artwork Name</label>
                                        <input id="name" placeholder="e. g. `Digital Awesome Game`" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="input-box pb--20">
                                        <label htmlFor="Description" className="form-label">Description</label>
                                        <textarea id="Description" rows={3} placeholder="e. g. “After purchasing the artwork you can get item...”"></textarea>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="input-box pb--20">
                                        <label htmlFor="dollerValue" className="form-label">Item Price in ETH</label>
                                        <input id="dollerValue" placeholder="e. g. `2 ETH`" />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="input-box pb--20">
                                        <label htmlFor="Size" className="form-label">Size</label>
                                        <input id="Size" placeholder="e. g. `Size`" />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="input-box pb--20">
                                        <label htmlFor="Propertie" className="form-label">Properties</label>
                                        <input id="Propertie" placeholder="e. g. `Properties`" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="input-box pb--20">
                                        <label htmlFor="contact" className="form-label">Contact Address Info for Artwork Verification</label>
                                        <textarea id="Description" rows={3} placeholder="Shop 15, Jos Museum Art Gallery; +234-0819-3484-131; africanArt@gmail.com"></textarea>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="input-box">
                                        <button className="btn btn-primary btn-large w-100">Submit Item</button>
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>

                    <div className="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
                        <h5> Note: </h5>
                        <span> Service fee : <strong>2.5%</strong> </span> <br />
                        <span> You will receive : <strong>25.00 ETH $50,000</strong></span>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- create new product area --> */}
    </>
  );
}

export default CreateNFT;
