'use client';

// import Link from 'next/link';

import {Link} from 'react-scroll'

import React, { useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [status, setStatus] = React.useState(false);
  const handleNavClick = () => {
    setStatus(!status);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="nav">
      <div className="heading">
        <h2>HACKSTREET 2.0</h2>
      </div>
      <div className="NavBar-desc">
        <Link to="home">HOME</Link>
        <Link to="about">ABOUT</Link>
        <Link to="prize">PRIZE</Link>
        <Link to="faq">FAQs</Link>
        <Link to="sponser">PARTNERS</Link>
        <div
          className="apply-button"
          data-hackathon-slug="hackstreet24"
          data-button-theme="light"
          style={{ height: '44px', width: '312px' }}
        />
      </div>
      <button type="button" onClick={handleNavClick} className="menuButton">
        <img id="menuImg" src="/menuBtn.png" />
      </button>

      <div
        style={{ display: status ? 'block' : 'none' }}
        className="NavBar-description flex flex-col"
      >
        <button type="button" onClick={handleNavClick} className="crossImg">
          <img src="/whiteCross.png" />
        </button>

        <Link className="navParts" to="home">
          HOME
        </Link>
        <br />
        <Link className="navParts" to="about">
          ABOUT
        </Link>
        <br />
        <Link className="navParts" to="prize">
          PRIZE
        </Link>
        <br />
        <Link className="navParts" to="faq">
          FAQs
        </Link>
        <br />
        <Link className="navParts" to="sponser">
          PARTNERS
        </Link>
        <br />
        <div
          className="apply-button"
          data-hackathon-slug="hackstreet24"
          data-button-theme="light"
          style={{ height: '44px', width: '312px' }}
        />
      </div>
    </div>
  );
}

export default Navbar;
