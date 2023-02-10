export function Footer() {
  return (
    <div className="copy-right-one ptb--20 bg-color--1 mt-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="copyright-left">
                        <span>©2022 NFT-Marketplace, Inc. All rights reserved.</span>
                        <ul className="privacy">
                            <li><a href="terms-condition.html">Terms</a></li>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="copyright-right">
                        <ul className="social-copyright">
                            {/* <li><a href="#"><i data-feather="facebook"></i></a></li>
                            <li><a href="#"><i data-feather="twitter"></i></a></li>
                            <li><a href="#"><i data-feather="instagram"></i></a></li>
                            <li><a href="#"><i data-feather="linkedin"></i></a></li>
                            <li><a href="#"><i data-feather="mail"></i></a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
