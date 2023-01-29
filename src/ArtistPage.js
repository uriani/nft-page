import "./ArtistPage.css";
import React from "react";
import { RiFileCopyLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import useWindowDimensions from "./UseWindowDimensionHook";

export default function ArtistPage() {
  const myInfo = [
    [
      {
        artist: "Animakid",
        avatar: "/images/animakid.png",
      },
    ],
    [
      {
        image: "/images/discover-more-nfts-main-img1.png",
        imageName: "Distant Galaxy",
        price: 1.63,
        bid: 0.33,
      },
      {
        image: "/images/discover-more-nfts-main-img2.png",
        imageName: "Life On Edena",
        price: 1.63,
        bid: 0.33,
      },
      {
        image: "/images/discover-more-nfts-main-img3.png",
        imageName: "AstroFiction",
        price: 1.63,
        bid: 0.33,
      },
      {
        image: "/images/discover-more-nfts-main-img1.png",
        imageName: "Distant Galaxy",
        price: 1.63,
        bid: 0.33,
      },
      {
        image: "/images/discover-more-nfts-main-img2.png",
        imageName: "Life On Edena",
        price: 1.63,
        bid: 0.33,
      },
      {
        image: "/images/discover-more-nfts-main-img3.png",
        imageName: "AstroFiction",
        price: 1.63,
        bid: 0.33,
      },
      {
        image: "/images/discover-more-nfts-main-img1.png",
        imageName: "Distant Galaxy",
        price: 1.63,
        bid: 0.33,
      },
      {
        image: "/images/discover-more-nfts-main-img2.png",
        imageName: "Life On Edena",
        price: 1.63,
        bid: 0.33,
      },
      {
        image: "/images/discover-more-nfts-main-img3.png",
        imageName: "AstroFiction",
        price: 1.63,
        bid: 0.33,
      },
    ],
  ];

  const width = useWindowDimensions();

  return (
    <div className="artist-page">
      <div className="cover-profile-image">
        <div className="image"></div>
        
          <img src="images/top-rated-artist-img-10.png" alt="" className="artistPage-profile-image"/>
        
      </div>
      <div className="artist-info">
        <div className="frame-264">
          <h4>Animakid</h4>
          <div className="ctas">
            <button>
              <RiFileCopyLine />
              0xc0E3...B79C
            </button>
            <button>
              <AiOutlinePlus style={{ color: "#A259FF" }} />
              Follow
            </button>
          </div>
          <div className="stats">
            <div className="total-sale">
              <h5>250k+</h5>
              <p>Volume</p>
            </div>
            <div className="auctions">
              <h5>50k+</h5>
              <p>BFTs Sold</p>
            </div>
            <div className="artists">
              <h5>3000k+</h5>
              <p>Followers</p>
            </div>
          </div>
          <div className="bio">
            <p>Bio</p>
            <p>The internet's friendliest designer kid.</p>
          </div>
          <div className="web-link">
            <p>Links</p>
            <div className="icons">
              <TbWorld />
              <RxDiscordLogo />
              <AiOutlineYoutube />
              <FiTwitter />
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="tab-bar">
        <hr />
        <div className="frame-247">
          <div className="tabs">
            <div>Created</div>
            <div>Owned</div>
            <div>Collection</div>
          </div>
        </div>
      </div>
      <div className="nft-cards-section" id="artistPage-nft-cards-section">
        <div className="nft-cards-row">
          {myInfo[1]
            .filter((val, index) => {
              if (width < 700 && index <= 2) {
                return val;
              } else if (width >= 700 && width < 1280 && index <= 5) {
                return val;
              } else if (width >= 1280) {
                return val;
              }
            })
            .map((val, index) => {
              return (
                <div className="nft-card-row" key={index}>
                  <div className="nft-card">
                    <div
                      className="image"
                      id="artistPage-ntf-card-image-container"
                    >
                      <img src={val.image} alt="" />
                    </div>
                    <div className="nft-info">
                      <div className="artist-info">
                        <h5>{val.imageName}</h5>
                        <div className="artist-avatar-name">
                          <div className="avatar">
                            <div className="asset-12-2">
                              <img src={myInfo[0][0].avatar} alt="" />
                            </div>
                          </div>
                          <div className="artist-name">
                            <p>{myInfo[0][0].artist}</p>
                          </div>
                        </div>
                      </div>
                      <div className="additional-info">
                        <div className="price">
                          <p>Price</p>
                          <p>{val.price} ETH</p>
                        </div>
                        <div className="highest-bid">
                          <p>Highest Bid</p>
                          <p>{val.bid} wETH</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
