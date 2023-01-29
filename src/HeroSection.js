import { IoRocketOutline } from "react-icons/io5";
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div className="Home hero-section" id="Home">
      <div className="hero-section-frame">
        <div className="hero-text-buttons">
          <div className="headline-subhead">
            <h4>Discover digital art & Collect NFTs</h4>
            <p>
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
          </div>
          <div className="highlited-nft">
            <img src={"/images/hero-section-image1.png"} alt="" />
            <div className="frame-230">
              <h5>Space Walking</h5>
              <div className="artist-card">
                <div className="avatar">
                  <div className="asset-12-2">
                    <img src={"/images/animakid.png"} alt="artist's avatar" />
                  </div>
                </div>
                <p>Animakid</p>
              </div>
            </div>
          </div>
          <div className="button">
            <button>
              <IoRocketOutline style={{ color: "#ffffff" }} />
              <p>Get Started</p>
            </button>
          </div>
          <div className="additional-info">
            <div className="total-sale">
              <h5>240k+</h5>
              <p>Total Sale</p>
            </div>
            <div className="auctions">
              <h5>100k+</h5>
              <p>Auctions</p>
            </div>
            <div className="artists">
              <h5>240k+</h5>
              <p>Artists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
