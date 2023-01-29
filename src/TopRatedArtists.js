import React from "react";
import "./TopRatedArtists.css";
import { IoRocketOutline } from "react-icons/io5";
import useWindowDimensions from "./UseWindowDimensionHook";
import { Link } from "react-router-dom";

export default function TopRatedArtists() {
  // require ('./TopRatedArtists.css');

  const artistInfo = [
    {
      artistName: "Keepitreal",
      imgUrl: "/images/top-rated-artist-img-1.png",
      price: 34.53,
    },
    {
      artistName: "DigLab",
      imgUrl: "/images/top-rated-artist-img-2.png",
      price: 32.13,
    },
    {
      artistName: "GravityOne",
      imgUrl: "/images/top-rated-artist-img-3.png",
      price: 28.93,
    },
    {
      artistName: "Juanie",
      imgUrl: "/images/top-rated-artist-img-4.png",
      price: 25.3,
    },
    {
      artistName: "BlueWhale",
      imgUrl: "/images/top-rated-artist-img-5.png",
      price: 22.22,
    },
    {
      artistName: "BlueWhale",
      imgUrl: "/images/top-rated-artist-img-6.png",
      price: 22.22,
    },
    {
      artistName: "BlueWhale",
      imgUrl: "/images/top-rated-artist-img-7.png",
      price: 22.22,
    },
    {
      artistName: "BlueWhale",
      imgUrl: "/images/top-rated-artist-img-8.png",
      price: 22.22,
    },
    {
      artistName: "BlueWhale",
      imgUrl: "/images/top-rated-artist-img-9.png",
      price: 22.22,
    },
    {
      artistName: "BlueWhale",
      imgUrl: "/images/top-rated-artist-img-10.png",
      price: 22.22,
    },
    {
      artistName: "BlueWhale",
      imgUrl: "/images/top-rated-artist-img-11.png",
      price: 22.22,
    },
    {
      artistName: "BlueWhale",
      imgUrl: "/images/top-rated-artist-img-12.png",
      price: 22.22,
    },
  ];

  const width = useWindowDimensions();

  return (
    <div className="top-rated-artists">
      <div className="section-headline-button">
        <div className="section-headline">
          <div className="heading">
            <h4>Top creators</h4>
          </div>
          <div className="subhead">
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          </div>
        </div>
      </div>
      <div className="artist-cards-row">
        {artistInfo
          .filter((val, index) => {
            if (width < 700 && index <= 4) {
              return val;
            } else if (width >= 700 && width < 1280 && index <= 5) {
              return val;
            } else if (width >= 1280) {
              return val;
            }
          })
          .map((val, index) => {
            return (
              <div className="artist-card" key={index}>
                <div className="artist-avatar" id="artist-avatar">
                  <div className="asset-12-2">
                    <img src={val.imgUrl} alt="" />
                  </div>
                </div>
                <div className="artist-info">
                  <h5 className="artist-info-artist-name">{val.artistName}</h5>
                  <div className="additional-info">
                    <p>Total Sales:</p>
                    <p>{val.price} ETH</p>
                  </div>
                </div>
                <div className="ranking-number">
                  <p>{index + 1}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="section-headline-buttons">
        <button>
          <Link to="/Rankings" 
          target="#rankings-container "
          
          >
            <IoRocketOutline
              style={{ color: "#A259FF" }}
              className="rockerIcon"
              size="24px"
            />
            <p>View Rankings</p>
          </Link>
        </button>
      </div>
    </div>
  );
}
