import React from "react";
import "./ConnectWallet.css";
import { GiDoubleFaceMask, GiWallet } from "react-icons/gi";
import { BiCoinStack } from "react-icons/bi";

export default function ConnectWallet() {
  return (
    <div className="connect-wallet">
      <img
        src="images/connect-wallet-img-1.png"
        alt=""
        className="connect-wallet-img"
      />
      <div className="create-account-form">
        <div className="wallet-headline-subhead">
          <h3>Connect Wallet</h3>
          <p>
            Choose a wallet you want to connect. There are several wallet
            providers.
          </p>
        </div>
        <div className="wallet-options">
          <button>
            <GiDoubleFaceMask className="button-icon"/>
            Metamask
          </button>
          <button>
            <GiWallet className="button-icon"/>
            Wallet Connect
          </button>
          <button>
            <BiCoinStack className="button-icon"/>
            Coinbase</button>
        </div>
      </div>
    </div>
  );
}
