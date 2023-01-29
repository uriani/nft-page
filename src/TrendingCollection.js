import { SnowshoeingOutlined } from "@mui/icons-material";
import React, { useEffect, useState} from "react";
import "./TrendingCollection.css";
import useWindowDimensions from "./UseWindowDimensionHook";

// function useWindowSize() {
//   const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
//   useEffect(() => {
//     const handleResize = () => {
//       setSize([window.innerHeight, window.innerWidth]);
//     };
//     window.addEventListener('resize', handleResize);
//   }, []);
//   return size;
// }


export default function TrendingCollection() {
  const trendingInfo = [
    {
      artistName: "MRFox",
      collectionName: "DSGN Animals",
      primaryImage: "/images/trending-collection-primary-1.png",
      secondaryImages: [
        "/images/trending-collection1-frame-228-img1.png",
        "/images/trending-collection1-frame-228-img2.png",
        "1025+",
      ],
      avatar: "/images/trending-collection1-frame-228-avatar.png",
      key: 0,
    },
    {
      artistName: "MRFox",
      collectionName: "DSGN Animals",
      primaryImage: "/images/trending-collection-primary-2.png",
      secondaryImages: [
        "/images/trending-collection2-frame-228-img1.png",
        "/images/trending-collection2-frame-228-img2.png",
        "1025+",
      ],
      avatar: "/images/trending-collection2-frame-228-avatar.png",
      key: 1,
    },
    {
      artistName: "MRFox",
      collectionName: "DSGN Animals",
      primaryImage: "/images/trending-collection-primary-3.png",
      secondaryImages: [
        "/images/trending-collection3-frame-228-img1.png",
        "/images/trending-collection3-frame-228-img2.png",
        "1025+",
      ],
      avatar: "/images/trending-collection3-frame-228-avatar.png",
      key: 2,
    },
  ];

  const width = useWindowDimensions();
 

  return (
    <div className="trending-collection">
      <div className="trending-collection-frame">
        <div className="section-headline">
          <div className="heading">
            <h4>Trending Collection</h4>
          </div>
          <div className="subhead">
            <p>Checkout our weekly updated trending collection.</p>
          </div>
        </div>
        <div className="collection-slider">
          {trendingInfo
            .filter((val, index) => {
              if (width < 700 && index === 0) {
                return val;
              } else if (width >= 700 && width < 1280 && index <= 1) {
                return val;
              } else if (width >= 1280) {
                return val;
              }
            })
            .map((val, indx) => {
              return (
                <div className="collection-card" key={indx}>
                  <div className="photos-number-of-additional-nft">
                    <img src={val.primaryImage} alt="" />

                    <div className="frame-228">
                      <div className="secondary-photo-placeholder">
                        <img src={val.secondaryImages[0]} alt="" />
                      </div>
                      <div className="secondary-photo-placeholder">
                        <img src={val.secondaryImages[1]} alt="" />
                      </div>
                      <div className="number-of-additional-nft">
                        <p>{val.secondaryImages[2]}</p>
                      </div>
                    </div>
                  </div>
                  <div className="collection-info">
                    <h5>{val.collectionName}</h5>
                    <div className="artist-card">
                      <div className="avatar">
                        <div className="asset-12-2">
                          <img src={val.avatar} alt="" />
                        </div>
                      </div>
                      <p>{val.artistName}</p>
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
