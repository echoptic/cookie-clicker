import React, { useState, useEffect } from "react";

import "../assets/css/Cookie.css";
import cookie from "../assets/images/cookie.png";

const Cookie: React.FC = () => {
  const [cookieCount, setCookieCount] = useState(0);

  useEffect(() => {
    document.title = `${cookieCount} cookies`;
  }, [cookieCount]);

  useEffect(() => {
    // Cookie Button
    const cookieButton = document.querySelector("button") as HTMLButtonElement;
    cookieButton.addEventListener("mousedown", (e) => {
      console.log(e);
    });
  }, []);

  const cookieClicked = () => {
    setCookieCount(cookieCount + 1);
  };

  return (
    <>
      <div className="cookie">
        <div className="cookie-count">
          <p
            className="title"
            style={{
              marginBottom: 0,
            }}
          >
            {cookieCount} cookies
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "white",
              marginTop: 0,
            }}
          >
            per second: 0.0
          </p>
        </div>
        <button className="cookie-button" onClick={cookieClicked}>
          <img className="cookie-img" src={cookie} alt="" />
        </button>
      </div>
    </>
  );
};

export default Cookie;
