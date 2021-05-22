import React from "react";

const Upgrade: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div
      className="upgrades"
      style={{
        height: 65,
      }}
    >
      <h1>{name}</h1>
    </div>
  );
};

export default Upgrade;
