import React from "react";

import "../assets/css/Upgrades.css";

const Upgrade: React.FC<{
  name: string;
  cookieCount?: number;
  minCount?: number;
}> = ({ name, cookieCount = 0, minCount = 0 }) => {
  return (
    <div
      className="upgrades"
      style={{
        height: 65,
      }}
    >
      <h1 className="upgrade-button" onClick={() => console.log(name)}>
        {cookieCount < minCount ? "???" : name}
      </h1>
    </div>
  );
};

export default Upgrade;
