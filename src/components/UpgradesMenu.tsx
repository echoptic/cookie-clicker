import Upgrade from './Upgrade';

import React from 'react';

const UpgradesMenu: React.FC = () => {
  return (
    <div className="upgrades-menu">
      <p
        className="title"
        style={{
          position: 'relative',
          left: '45%',
          margin: 0,
        }}
      >
        Store
      </p>
      <Upgrade name="Cursor" />
      <Upgrade name="???" />
      <Upgrade name="???" />
    </div>
  );
};

export default UpgradesMenu;
