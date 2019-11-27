import React from 'react';
import logo from './logo.svg';
import Header from './../components/Header/Header';
import Banner from './../components/Banner/Banner'
import './Home.css';

function Home() {
  return (
    <div className="wrapper">
      <Header/>
      <Banner/>
    </div>
  );
}

export default Home;
