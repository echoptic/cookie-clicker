import React from 'react';

import '../assets/css/Upgrades.css';

const Upgrade: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div
      className="upgrades"
      style={{
        height: 65,
      }}
    >
      <h1 className="upgrade-button" onClick={() => console.log(name)}>
        {name}
      </h1>
    </div>
  );
};

export default Upgrade;
