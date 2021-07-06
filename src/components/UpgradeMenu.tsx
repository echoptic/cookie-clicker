import Upgrade from "./Upgrade";

import React from "react";

const UpgradeMenu: React.FC<{ cookieCount: number }> = ({ cookieCount }) => {
  return (
    <div className="upgrades-menu">
      <p
        className="title"
        style={{
          position: "relative",
          left: "45%",
          margin: 0,
        }}
      >
        Store
      </p>
      <Upgrade name="Cursor" />
      <Upgrade name="Grandma" cookieCount={cookieCount} minCount={10} />
      <Upgrade name="Farm" cookieCount={cookieCount} minCount={50} />
    </div>
  );
};

export default UpgradeMenu;
