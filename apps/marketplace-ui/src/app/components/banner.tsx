import { Link } from 'react-router-dom'

export function Banner() {
  return (
    <div className="slider-one rn-section-gapTop">
        <div className="container">
            <div className="row row-reverce-sm align-items-center">
                <div className="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
                    <h2 className="title">Discover African Art, Buy and Sell Your Specific Artworks.</h2>
                    <p className="slide-disc">Explore our immerse collection of African arts.</p>
                    <div className="button-group">
                        <Link className="btn btn-large btn-primary" to="/collection">Explore NFTs</Link>
                        <Link className="btn btn-large btn-primary-alta" to="/create">Sell NFT</Link>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-1">
                    <div className="slider-thumbnail">
                        <img src="assets/images/jos_museum.jpg" alt="Slider Images" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
