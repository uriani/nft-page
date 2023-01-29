import React from "react";
import "./Rankings.css";
import useWindowDimensions from "./UseWindowDimensionHook";

export default function Rankings() {
  const rankingsInfo = [
    {
      number: '#',
      artist: 'Artist',
      volume: 'volume',
      change: 'Change',
      nftsSold: 'NFTs Sold',
    },
    {
      artist: 'Jaydon Ekstrom Bothman',
      avatar: 'images/top-rated-avatar-1.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Ruben Carder',
      avatar: 'images/top-rated-avatar-2.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Alfredo Septimus',
      avatar: 'images/top-rated-avatar-3.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Davis Franci',
      avatar: 'images/top-rated-avatar-4.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Livia Rosser',
      avatar: 'images/top-rated-avatar-5.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Kianna Donin',
      avatar: 'images/top-rated-avatar-6.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Phillip Lipshuts',
      avatar: 'images/top-rated-avatar-7.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Maria Rosser',
      avatar: 'images/top-rated-avatar-8.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Kianna Stanton',
      avatar: 'images/top-rated-avatar-9.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Angel Lubin',
      avatar: 'images/top-rated-avatar-10.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Allison Troff',
      avatar: 'images/top-rated-avatar-11.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Davis Worksman',
      avatar: 'images/top-rated-avatar-12.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Lindsey Lipshutz',
      avatar: 'images/top-rated-avatar-13.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Randy Carder',
      avatar: 'images/top-rated-avatar-14.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Lydia Culhane',
      avatar: 'images/top-rated-avatar-15.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Rayna Bator',
      avatar: 'images/top-rated-avatar-16.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Joccelyn Westervelt',
      avatar: 'images/top-rated-avatar-17.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Marikyn Tordd',
      avatar: 'images/top-rated-avatar-18.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Skylar Levin',
      avatar: 'images/top-rated-avatar-19.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
    {
      artist: 'Terry Dorwart',
      avatar: 'images/top-rated-avatar-20.png',
      volume: '12.4 ETH',
      change: '+1.41%',
      nftsSold: '602',
    },
  ];

  const width = useWindowDimensions();

  return (
    <div className="rankings-container" id='rankings-container'>
      <div className="rankings-frame">
        <div className="headline-subhead" id="rankings-headline-subhead">
          <h4>Browse MarketplaceTop Creators</h4>
          <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
        </div>
        <div className="rankings-tabs-bar">
            <div>
                <p>1d</p>
            </div>
            <div>
                <p>7d</p>
            </div>
            <div>
                <p>30d</p>
            </div>
            <div>
                <p>All time</p>
            </div>
        </div>
        <div className="rankings-list">
            {rankingsInfo.map((val, index) => {
              return (
                <div className="ranking-card" key={index}>
                  <p>{index == 0 ? '#' : index}</p>
                  {val.avatar && <img src={val.avatar} alt="" className="ranking-avatar"/>}
                  <p className="artist-name">{val.artist}</p>
                  {width >= 700 && <p id="change">{val.change}</p>}
                  {width >= 1280 && <p>{val.nftsSold}</p>}
                  <p>{val.volume}</p>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  );
}
