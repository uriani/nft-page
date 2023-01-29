import React, { useState } from "react";
import "./Marketplace.css";
import NftFragment from "./NftFragment";
import { BiSearch } from "react-icons/bi";

export default function Marketplace() {
  const marketplaceNftInfo = [
    {
      artist: "Shroomie",
      avatar: "/images/marketplace-collection1-avatar-image.png",
      image: "/images/marketplace-collection1-primary-image.png",
      imageName: "Magic Mushroom 0325",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Bekind2Robots",
      avatar: "/images/marketplace-collection2-avatar-image.png",
      image: "/images/marketplace-collection2-primary-image.png",
      imageName: "Happy RObot 032",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Bekind2Robots",
      avatar: "/images/marketplace-collection3-avatar-image.png",
      image: "/images/marketplace-collection3-primary-image.png",
      imageName: "Happy RObot 024",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Mr Fox",
      avatar: "/images/marketplace-collection4-avatar-image.png",
      image: "/images/marketplace-collection4-primary-image.png",
      imageName: "Designer Bear",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Keepitreal",
      avatar: "/images/marketplace-collection5-avatar-image.png",
      image: "/images/marketplace-collection5-primary-image.png",
      imageName: "Colorful Dog 0356",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Robotica",
      avatar: "/images/marketplace-collection6-avatar-image.png",
      image: "/images/marketplace-collection6-primary-image.png",
      imageName: "Dancing Robot 0312",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "MoonDancer",
      avatar: "/images/marketplace-collection7-avatar-image.png",
      image: "/images/marketplace-collection7-primary-image.png",
      imageName: "Cherry Blossom Girl 035",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "NebulaKid",
      avatar: "/images/marketplace-collection8-avatar-image.png",
      image: "/images/marketplace-collection8-primary-image.png",
      imageName: "Space Travel",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "AnimaKid",
      avatar: "/images/marketplace-collection9-avatar-image.png",
      image: "/images/marketplace-collection9-primary-image.png",
      imageName: "Sunset Dimension",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Catch 22",
      avatar: "/images/marketplace-collection10-avatar-image.png",
      image: "/images/marketplace-collection10-primary-image.png",
      imageName: "Desert Walk",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Ice Ape Club",
      avatar: "/images/marketplace-collection11-avatar-image.png",
      image: "/images/marketplace-collection11-primary-image.png",
      imageName: "IceCream Ape 0324",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "PuppyPower",
      avatar: "/images/marketplace-collection12-avatar-image.png",
      image: "/images/marketplace-collection12-primary-image.png",
      imageName: "Colorful Dog 034",
      price: 1.63,
      bid: 0.33,
    },
  ];

  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className="marketplace-container">
      <div className="marketplace-frame" id="marketplace-frame">
        <div className="headline-subhead" id="marketplace-headline-subhead">
          <div className="frame-268">
            <h4>Browse Marketplace</h4>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
          </div>
          <div className="search-container">
            <input
              type="search"
              className="marketplace-search"
              placeholder="Search your favorite NFT"
              value={searchValue}
              onChange={(e) => handleChange(e)}
            />
            <BiSearch className="search-icon"/>
          </div>
        </div>
        <div className="marketplace-section">
          <div className="tabs-container">
            <hr />
            <div className="frame-247" id="marketplace-frame-247">
              <div className="tabs" id="marketplace-tabs">
                <div>NFTs</div>
                <div>Collections</div>
              </div>
            </div>
          </div>
          <div className="marketplace-nft-cards-section">
            <NftFragment collectionObj = {
              marketplaceNftInfo.filter(val => {
                if(searchValue === '') {
                  return val
                }else if(val.imageName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                  return val
                }
              })
            }
          />
          </div>
        </div>
      </div>
    </div>
  );
}
