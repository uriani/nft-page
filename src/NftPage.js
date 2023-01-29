import React from "react";
import "./NftPage.css";
import ClockDisplay from './EasyCountdown.js';
import CountdownDisplay from './CountdownDisplay.js';
import { TbWorld } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";
import NftFragment from "./NftFragment";
import useWindowDimensions from "./UseWindowDimensionHook";
import './CountdownDisplay.css';

export default function NftPage() {

  const nftPageObj = [
    {
      artist: "Orbitian",
      image: "/images/nftPage-image-1.png",
      imageName: "Foxy Life",
      avatar: "/images/nftPage-avatar.png",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Orbitian",
      image: "/images/nftPage-image-2.png",
      imageName: "Cat From Future",
      avatar: "/images/nftPage-avatar.png",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Orbitian",
      image: "/images/nftPage-image-3.png",
      imageName: "Psycho Dog",
      avatar: "/images/nftPage-avatar.png",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Orbitian",
      image: "/images/nftPage-image-4.png",
      imageName: "Designer Bear",
      avatar: "/images/nftPage-avatar.png",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Orbitian",
      image: "/images/nftPage-image-5.png",
      imageName: "Dancing Robot 0375",
      avatar: "/images/nftPage-avatar.png",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Orbitian",
      image: "/images/nftPage-image-6.png",
      imageName: "Dancing Robot 0356",
      avatar: "/images/nftPage-avatar.png",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Orbitian",
      image: "/images/nftPage-image-7.png",
      imageName: "Dancing Robot 0321",
      avatar: "/images/nftPage-avatar.png",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Orbitian",
      image: "/images/nftPage-image-8.png",
      imageName: "Dancing Robot 0512",
      avatar: "/images/nftPage-avatar.png",
      price: 1.63,
      bid: 0.33,
    },
    {
      artist: "Orbitian",
      image: "/images/nftPage-image-9.png",
      imageName: "Dancing Robot 0024",
      avatar: "/images/nftPage-avatar.png",
      price: 1.63,
      bid: 0.33,
    },
  ];

  const width = useWindowDimensions();

  return (
    <div className="nft-page">
      <img
        src="images/nft-page-main-image.png"
        alt=""
        className="nftPage-cover"
      />
      <div className="nft-page-artist-info">
        <div className="nft-info" id="nftPage-nft-info">
          <div className="headline-subhead">
            <h4>The Orbitians</h4>
            <p>Minted on Sep 30, 2022</p>
          </div>
          <div className="auction-timer-cta">
            <div className="auction-timer">
              <p>Auction ends in:</p>
              <div className="timer">
                <CountdownDisplay
                // duration={2 * 1000 * 60 * 60 * 24}
                />
              </div>
            </div>
            <button>Place Bid</button>
          </div>
          <div className="created-by">
            <p>Created By</p>
            <div className="artist-card">
              <div className="avatar">
                <div className="asset-12-2">
                  <img src="images/top-rated-artist-img-1.png" alt="" />
                </div>
              </div>
              <p>Dish Studio</p>
            </div>
          </div>
          <div className="description">
            <p>description</p>
            <p>
              The Orbitians is a collection of 10,000 unique NFTs on the
              Ethereum blockchain.
              <br />
              <br />
              There are all sorts of beings in the NFT Universe. The most
              advanced and friendly of the bunch are Orbitians.
              <br />
              <br />
              They live in a metal space machines, high up in the sky and only
              have one foot on Earth. <br />
              These Orbitians are a peaceful race, but they have been at war
              with a group of invaders for many generations. The invaders are
              called Upside-Downs, because of their inverted bodies that live on
              the ground, yet do not know any other way to be. Upside-Downs
              believe that they will be able to win this war if they could only
              get an eye into Orbitian territory, so they've taken to make human
              beings their target.
            </p>
          </div>
          <div className="details">
            <p>Details</p>
            <div>
              <TbWorld />
              <p>View on Etherscan</p>
            </div>
            <div>
              <TbWorld />
              <p>View Original</p>
            </div>
          </div>
          <div className="tags">
            <p>Tags</p>
            <div className="tags-buttons">
              <button>ANIMATION</button>
              <button>ILUSTRATION</button>
              <button>MOON</button>
              <button>MOON</button>
            </div>
          </div>
        </div>
      </div>
      <div className="more-nft-from-the-artist">
        <div className="more-from-artist">
          <h4>More From This Artist</h4>
          <NftFragment collectionObj={nftPageObj}/>
          <button className="nftPage-button">
            <AiOutlineArrowRight />
            Go To Artist Page
          </button>
        </div>
      </div>
    </div>
  );
}
