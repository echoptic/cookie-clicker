import Cookie from "./components/Cookie";
import UpgradesMenu from "./components/UpgradesMenu";

import React from "react";

const App: React.FC = () => {
  return (
    <>
      <div className="split left">
        <Cookie />
      </div>
      <div className="split right">
        <UpgradesMenu />
      </div>
    </>
  );
};

export default App;
