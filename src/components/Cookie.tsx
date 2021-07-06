import React, { useState, useEffect } from "react";

import "../assets/css/Cookie.css";
// @ts-expect-error
import cookie from "../assets/images/cookie.png";

const Cookie: React.FC<{ cookieCount: number; onClick: () => void }> = ({
  cookieCount,
  onClick,
}) => {
  useEffect(() => {
    document.title = `${cookieCount} cookies`;
  }, [cookieCount]);

  useEffect(() => {
    // Cookie Button
    const cookieButton = document.querySelector("button") as HTMLButtonElement;
    cookieButton.addEventListener("mousedown", () => {
      const click = new Audio("https://www.fesliyanstudios.com/play-mp3/6247");
      click.play();
    });
  }, []);

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
        <button className="cookie-button" onClick={onClick}>
          <img className="cookie-img" src={cookie} alt="" />
        </button>
      </div>
    </>
  );
};

export default Cookie;
