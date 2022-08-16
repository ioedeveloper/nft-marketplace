export function ViewDetails() {
  return (
    <>
    {/* <!-- start product details area --> */}
    <div className="product-details-area rn-section-gapTop">
        <div className="container">
            <div className="row g-5">
                {/* <!-- product image area --> */}

                <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="product-tab-wrapper rbt-sticky-top-adjust">
                        <div className="pd-tab-inner">
                            <div className="nav rn-pd-nav rn-pd-rt-content nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <span className="rn-pd-sm-thumbnail">
                                        <img src="assets/images/portfolio-04.jpg" alt="Nft_Profile" />
                                    </span>
                                </button>
                                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                    <span className="rn-pd-sm-thumbnail">
                                        <img src="assets/images/portfolio-03.jpg" alt="Nft_Profile" />
                                    </span>
                                </button>
                            </div>

                            <div className="tab-content rn-pd-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div className="rn-pd-thumbnail">
                                        <img src="assets/images/portfolio-02.jpg" alt="Nft_Profile" />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div className="rn-pd-thumbnail">
                                        <img src="assets/images/portfolio-02_2.jpg" alt="Nft_Profile" />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <div className="rn-pd-thumbnail">
                                        <img src="assets/images/portfolio-03_2.jpg" alt="Nft_Profile" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- product image area end --> */}

                <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                    <div className="rn-pd-content-area">
                        <div className="pd-title-area">
                            <h4 className="title">Twilight Piece</h4>
                            <div className="pd-react-area">
                                <div className="heart-count">
                                    <i data-feather="heart"></i>
                                    <span>33</span>
                                </div>
                                <div className="count">
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                            </div>
                        </div>
                        <span className="bid">Price <span className="price">0.11ETH</span></span>
                        <div className="catagory-collection">
                            <div className="collection">
                                <div className="top-seller-inner-one">
                                    <div className="top-seller-wrapper">
                                        <div className="thumbnail">
                                            <a href="#"><img src="assets/images/client-2.png" alt="Nft_Profile" /></a>
                                        </div>
                                        <div className="top-seller-content">
                                            <a href="#">
                                                <h6 className="name">Owner</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <span>0xc257274276a4e539741ca11b590b9447b26a8051</span>
                            </div>
                        </div>
                        <h6>Description</h6>
                        <p>
                            Amongst the best-known traditional African art, the twilight piece stands out to showcase the beauty of a true African community.
                        </p>
                        {/* <!-- <a className="btn btn-primary-alta mt--30" href="#">Place a Bid</a> --> */}
                        <button type="button" className="btn btn-primary-alta mt--30" data-bs-toggle="modal" data-bs-target="#placebidModal">BUY</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    {/* <!-- End product details area --> */}
    {/* <!-- New items Start --> */}
    <div className="rn-new-items rn-section-gapTop pb-5">
        <div className="container">
            <div className="row mb--50 align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h3 className="title mb--0">Recent View</h3>
                </div>
            </div>
            <div className="row g-5">
                {/* <!-- start single product --> */}
                <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="product-style-one no-overlay">
                        <div className="card-thumbnail">
                            <a href="product-details.html"><img src="assets/images/portfolio-02.jpg" alt="NFT_portfolio" /></a>
                        </div>
                        <div className="product-share-wrapper">
                            <div className="profile-share">
                                <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="assets/images/client-4.png" alt="Nft_Profile" /></a>
                                <a href="author.html" className="avatar" data-tooltip="Nira Ara"><img src="assets/images/client-5.png" alt="Nft_Profile" /></a>
                                <a href="author.html" className="avatar" data-tooltip="Fatima Afrafy"><img src="assets/images/client-6.png" alt="Nft_Profile" /></a>
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
                        <a href="product-details.html"><span className="product-name">Twilight Piece</span></a>
                        <div className="bid-react-area">
                            <div className="last-bid">0.892ETH</div>
                            <div className="react-area">
                                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                <span className="number">420</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end single product --> */}

                {/* <!-- start single product --> */}
                <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="product-style-one no-overlay">
                        <div className="card-thumbnail">
                            <a href="product-details.html"><img src="assets/images/portfolio-03.jpg" alt="NFT_portfolio" /></a>
                        </div>
                        <div className="product-share-wrapper">
                            <div className="profile-share">
                                <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="assets/images/client-1.png" alt="Nft_Profile" /></a>
                                <a href="author.html" className="avatar" data-tooltip="Janin Ara"><img src="assets/images/client-8.png" alt="Nft_Profile" /></a>
                                <a href="author.html" className="avatar" data-tooltip="Atif Islam"><img src="assets/images/client-9.png" alt="Nft_Profile" /></a>
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
                        <a href="product-details.html"><span className="product-name">Crystal Hand</span></a>
                        <div className="bid-react-area">
                            <div className="last-bid">0.2128ETH</div>
                            <div className="react-area">
                                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                <span className="number">12</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end single product --> */}

                {/* <!-- start single product --> */}
                <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="product-style-one no-overlay">
                        <div className="card-thumbnail">
                            <a href="product-details.html"><img src="assets/images/portfolio-04.jpg" alt="NFT_portfolio" /></a>
                        </div>
                        <div className="product-share-wrapper">
                            <div className="profile-share">
                                <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="assets/images/client-1.png" alt="Nft_Profile" /></a>
                                <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="assets/images/client-3.png" alt="Nft_Profile" /></a>
                                <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="assets/images/client-5.png" alt="Nft_Profile" /></a>
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
                        <a href="product-details.html"><span className="product-name">Morgan11</span></a>
                        <div className="bid-react-area">
                            <div className="last-bid">0.265ETH</div>
                            <div className="react-area">
                                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                <span className="number">20</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end single product --> */}

                {/* <!-- start single product --> */}
                <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="product-style-one no-overlay">
                        <div className="card-thumbnail">
                            <a href="product-details.html"><img src="assets/images/portfolio-05.jpg" alt="NFT_portfolio" /></a>
                        </div>
                        <div className="product-share-wrapper">
                            <div className="profile-share">
                                <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="assets/images/client-2.png" alt="Nft_Profile" /></a>
                                <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="assets/images/client-7.png" alt="Nft_Profile" /></a>
                                <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="assets/images/client-9.png" alt="Nft_Profile" /></a>
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
                        <a href="product-details.html"><span className="product-name">mAtal8</span></a>
                        <div className="bid-react-area">
                            <div className="last-bid">0.244ETH</div>
                            <div className="react-area">
                                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                <span className="number">205</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end single product --> */}
                {/* <!-- start single product --> */}
                <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="product-style-one no-overlay">
                        <div className="card-thumbnail">
                            <a href="product-details.html"><img src="assets/images/portfolio-06.jpg" alt="NFT_portfolio" /></a>
                        </div>
                        <div className="product-share-wrapper">
                            <div className="profile-share">
                                <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="assets/images/client-1.png" alt="Nft_Profile" /></a>
                                <a href="author.html" className="avatar" data-tooltip="Jone Due"><img src="assets/images/client-2.png" alt="Nft_Profile" /></a>
                                <a href="author.html" className="avatar" data-tooltip="Nisat Tara"><img src="assets/images/client-3.png" alt="Nft_Profile" /></a>
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
                        <a href="product-details.html"><span className="product-name">Invisible Love</span></a>
                        <div className="bid-react-area">
                            <div className="last-bid">0.244ETH</div>
                            <div className="react-area">
                                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                <span className="number">322</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end single product --> */}
            </div>
        </div>
    </div>
    {/* <!-- New items End --> */}
    </>
  );
}

export default ViewDetails;
