export function AdminPanel() {
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
                        <li className="item"><a href="index.html">Home</a></li>
                        <li className="separator"><i className="feather-chevron-right"></i></li>
                        <li className="item current">Admin Panel</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- end page title area --> */}


    <div className="rn-upcoming-area rn-section-gap">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* <!-- start Table Title --> */}
                    <div className="table-title-area d-flex">
                        <i data-feather="calendar"></i>
                        <h3>Pending Artworks NFT</h3>
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
                                <tr className="color-light">
                                    <td><span>Preatent</span></td>
                                    <td><span>-</span></td>
                                    <td><span>0xc257274276a4e539741ca11b590b9447b26a8051</span></td>
                                    <td><span className="color-info">0.244 ETH</span></td>
                                    <td><button className="btn btn-success">Approve</button>&nbsp;<button className="btn btn-danger">Reject</button></td>
                                </tr>
                                <tr>
                                    <td><span>Twilight Piece</span></td>
                                    <td><span>Amongst the best-known traditional African art...</span></td>
                                    <td><span>0xc257274276a4e539741ca11b590b9447b26a8051</span></td>
                                    <td><span className="color-info">0.11 ETH</span></td>
                                    <td><button className="btn btn-success">Approve</button>&nbsp;<button className="btn btn-danger">Reject</button></td>
                                </tr>
                                <tr className="color-light">
                                    <td><span>Morgan11</span></td>
                                    <td><span>-</span></td>
                                    <td><span>0xc257274276a4e539741ca11b590b9447b26a8051</span></td>
                                    <td><span className="color-info">0.265 ETH</span></td>
                                    <td><button className="btn btn-success">Approve</button>&nbsp;<button className="btn btn-danger">Reject</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- table End --> */}
                </div>
            </div>
            <div className="row mt--80">
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
                                <tr className="color-light">
                                    <td><span>Crystal Hand</span></td>
                                    <td><span>0xc257274276a4e539741ca11b590b9447b26a8051</span></td>
                                    <td><span className="color-info">0.2128 ETH</span></td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <td><span>Preatent</span></td>
                                    <td><span>0xc257274276a4e539741ca11b590b9447b26a8051</span></td>
                                    <td><span className="color-info">0.244 ETH</span></td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                                <tr className="color-light">
                                    <td><span>Twilight Piece</span></td>
                                    <td><span>0xc257274276a4e539741ca11b590b9447b26a8051</span></td>
                                    <td><span className="color-info">0.11 ETH</span></td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <td><span>Morgan11</span></td>
                                    <td><span>0xc257274276a4e539741ca11b590b9447b26a8051</span></td>
                                    <td><span className="color-info">0.265 ETH</span></td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- table End --> */}
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default AdminPanel;
