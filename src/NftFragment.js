import React from "react";
import './NftFragment.css';
import useWindowDimensions from "./UseWindowDimensionHook";

export default function NftFragment(props) {

  
  const myInfo = props.collectionObj;
  
  // [
  //     {
  //       artist: "Animakid",
  //       avatar: "/images/animakid.png",
  //       image: "/images/discover-more-nfts-main-img1.png",
  //       imageName: "Distant Galaxy",
  //       price: 1.63,
  //       bid: 0.33,
  //     },
  //     {
  //       artist: "Animakid",
  //       avatar: "/images/animakid.png",
  //       image: "/images/discover-more-nfts-main-img2.png",
  //       imageName: "Life On Edena",
  //       price: 1.63,
  //       bid: 0.33,
  //     },
  //     {
  //       artist: "Animakid",
  //       avatar: "/images/animakid.png",
  //       image: "/images/discover-more-nfts-main-img3.png",
  //       imageName: "AstroFiction",
  //       price: 1.63,
  //       bid: 0.33,
  //     },
  //     {
  //       artist: "Animakid",
  //       avatar: "/images/animakid.png",
  //       image: "/images/discover-more-nfts-main-img1.png",
  //       imageName: "Distant Galaxy",
  //       price: 1.63,
  //       bid: 0.33,
  //     },
  //     {
  //       artist: "Animakid",
  //       avatar: "/images/animakid.png",
  //       image: "/images/discover-more-nfts-main-img2.png",
  //       imageName: "Life On Edena",
  //       price: 1.63,
  //       bid: 0.33,
  //     },
  //     {
  //       artist: "Animakid",
  //       avatar: "/images/animakid.png",
  //       image: "/images/discover-more-nfts-main-img3.png",
  //       imageName: "AstroFiction",
  //       price: 1.63,
  //       bid: 0.33,
  //     },
  //     {
  //       artist: "Animakid",
  //       avatar: "/images/animakid.png",
  //       image: "/images/discover-more-nfts-main-img1.png",
  //       imageName: "Distant Galaxy",
  //       price: 1.63,
  //       bid: 0.33,
  //     },
  //     {
  //       artist: "Animakid",
  //       avatar: "/images/animakid.png",
  //       image: "/images/discover-more-nfts-main-img2.png",
  //       imageName: "Life On Edena",
  //       price: 1.63,
  //       bid: 0.33,
  //     },
  //     {
  //       artist: "Animakid",
  //       avatar: "/images/animakid.png",
  //       image: "/images/discover-more-nfts-main-img3.png",
  //       imageName: "AstroFiction",
  //       price: 1.63,
  //       bid: 0.33,
  //     },
  // ];
  
  const width = useWindowDimensions();

  return (
    <div className="nft-cards-row" id='fragment-container'>
      {myInfo
        .filter((val, index) => {
          if (width < 700 && index <= 1) {
            return val;
          } else if (width >= 700 && width < 1280 && index <= 5) {
            return val;
          } else if (width >= 1280) {
            return val;
          }
        })
        .map((val, index) => {
          return (
            <div className="nft-card-row" id='framgent-nft-card' key={index}>
              <div className="nft-card">
                <div className="image" id='fragment-primary-image'>
                  <img src={val.image} alt="" />
                </div>
                <div className="nft-info" id='fragment-nft-info'>
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
  );
}
