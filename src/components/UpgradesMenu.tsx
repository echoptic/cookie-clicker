import Upgrade from "./Upgrade";

import React from "react";

const UpgradesMenu: React.FC = () => {
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
      <Upgrade name="upgrade 1" />
      <Upgrade name="2" />
      <Upgrade name="3" />
    </div>
  );
};

export default UpgradesMenu;
