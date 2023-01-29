import React from 'react';
import ReactDOM from 'react-dom/client';
import  Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CreateAccount from './CreateAccount';
import ArtistPage from './ArtistPage';
import NftPage from './NftPage';
import ConnectWallet from './ConnectWallet';
import Marketplace from './Marketplace';
import Rankings from './Rankings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' index element={<Home />}/>
      <Route path='/createAccount/' element={<CreateAccount/>}/>
      <Route path='/ArtistPage' element={<ArtistPage/>} />
      <Route path='/ArtistPage:id' element={<ArtistPage/>} />
      <Route path='/ConnectWallet' element={<ConnectWallet/>}/>
      <Route path='/ConnectWallet:id' element={<ConnectWallet/>}/>
      <Route path='/NftPage' element={<NftPage/>}/>
      <Route path='/Marketplace' element={<Marketplace/>} />
      <Route path='/Rankings' element={<Rankings/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

