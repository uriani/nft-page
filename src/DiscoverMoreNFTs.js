import React from "react";
import "./DiscoverMoreNFTs.css";
import {AiOutlineEye} from 'react-icons/ai'
import useWindowDimensions from "./UseWindowDimensionHook";
import { Link } from "react-router-dom";

export default function DiscoverMoreNFT() {
  const myInfo = [
    {
      artist: "MoonDancer",
      image: "/images/discover-more-nfts-main-img1.png",
      imageName: "Distant Galaxy",
      avatar: "/images/discover-more-nfts-avatar-img1.png",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "NebulaKid",
      image: "/images/discover-more-nfts-main-img2.png",
      imageName: "Life On Edena",
      avatar: "/images/discover-more-nfts-avatar-img2.png",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Spaceone",
      image: "/images/discover-more-nfts-main-img3.png",
      imageName: "AstroFiction",
      avatar: "/images/discover-more-nfts-avatar-img3.png",
      price: 1.63,
      bid: 0.33,
    },
  ];

  const width = useWindowDimensions()

  return (
    <div className="discover-more-nfts">
      <div className="section-headline-button">
        <div className="section-headline">
          <h4>Discover More NFTs</h4>
          <p>Explore new trending NFTs</p>
        </div>
      </div>
      <div className="frame-241">
        {myInfo
        .filter((val, index) => {
          if (width < 700) {
            return val;
          } else if (width >= 700 && width < 1280 && index <= 1) {
            return val;
          } else if (width >= 1280) {
            return val;
          }
        })
        .map((val, index) => {
          return (
            <div className="nft-card-row" key={index}>
              <div className="nft-card">
                <div className="image" id='discoverPage-nft-card-image'>
                  <img src={val.image} alt="" />
                </div>
                <div className="nft-info" id='discoverPage-nft-info'>
                  <div className="artist-info">
                    <h5>{val.imageName}</h5>
                    <div className="artist-avatar-name">
                      <div className="avatar">
                        <div className="asset-12-2">
                          <img src={val.avatar} alt="" />
                        </div>
                      </div>
                      <div className="artist-name">
                        <p>{val.artist}</p>
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
      <div className="section-headline-button-2">
          <Link to='/NftPage'>
        <button>
          <AiOutlineEye style={{color: '#A259FF'}} size={'24px'}/>
          <p>See All</p>
        </button>
          </Link>
      </div>
    </div>
  );
}
