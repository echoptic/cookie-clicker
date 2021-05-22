import React, { useState, useEffect } from 'react';

import '../assets/css/Cookie.css';
import cookie from '../assets/images/cookie.png';

const Cookie: React.FC = () => {
  const [cookieCount, setCookieCount] = useState(0);

  useEffect(() => {
    document.title = `${cookieCount} cookies`;
  }, [cookieCount]);

  useEffect(() => {
    // Cookie Button
    const cookieButton = document.querySelector('button') as HTMLButtonElement;
    cookieButton.addEventListener('mousedown', (e) => {
      console.log(e);
    });

    // Cookie Canvas
  }, []);

  const cookieClicked = () => {
    setCookieCount(cookieCount + 1);
  };

  return (
    <>
      <div className="cookie">
        <p>{cookieCount} cookies</p>
        <button className="cookie-button" onClick={cookieClicked}>
          <img className="cookie-img" src={cookie} alt="" />
        </button>
      </div>
    </>
  );
};

export default Cookie;
