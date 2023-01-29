import React from "react";
import "./Footer.css";
import { AiOutlineShop } from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import {FiMail} from 'react-icons/fi';
import { useForm } from "react-hook-form";
import { BiRegistered } from "react-icons/bi";
import { Link } from "react-router-dom";


export default function Footer() {
  const {register, handleSubmit} = useForm();

  const formSubmited = (data) => {
    console.log(data)
  }

  return (
    <footer>
      <div className="footer-info">
        <div className="nft-marketplace-info">
          <div className="footer-logo">
            <div className="footer-marketplace-logo">
              <AiOutlineShop
                className="marketplace-logo-icon"
                style={{ color: "#A259FF" }}
              />
            </div>
            <p className="footer-marketplace-logo-text">NFT Marketplace</p>
          </div>
          <div className="additional-info" id="footer-additional-info">
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <div className="community-info">
              <p>Join our community</p>
              <div className="icons">
                <a href='https://discord.com/' target='_blank'><RxDiscordLogo /></a>
                <a href='https://www.youtube.com/' target='_blank'><AiOutlineYoutube /></a>
                <a  href='https://www.twitter.com/'  target='_blank'><FiTwitter /></a>
                <a href='https://www.instagram.com/' target='_blank'><AiOutlineInstagram /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="explore">
          <h5>Explore</h5>
          <div>
            <Link to='/Marketplace'><p>Marketplace</p></Link> 
            <Link to='/Rankings'><p>Rankings</p></Link>
            <Link to='/ConnectWallet'><p>Connect a wallet</p></Link>
          </div>
        </div>
        <div className="footer-subscribe frame-179">
          <div className="headline-subhead">
            <h4>Join our weekly digest</h4>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
          </div>
          <div className="subscribe-widget-mobile">
            <form onSubmit={handleSubmit(formSubmited)}>
              <input type="email" placeholder="Enter Your Email Address" {...register('email')}/>
              <button type="submit" >
                <FiMail size={"20px"} />
                <p>Subscribe</p>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="frame-239">
        <hr />
        <p>Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </footer>
  );
}
