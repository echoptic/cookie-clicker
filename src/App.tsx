import React, { useState } from "react";

import Cookie from "./components/Cookie";
import UpgradeMenu from "./components/UpgradeMenu";

const App: React.FC = () => {
  const [cookieCount, setCookieCount] = useState(0);

  return (
    <>
      <div className="split left">
        <Cookie
          cookieCount={cookieCount}
          onClick={() => setCookieCount(cookieCount + 1)}
        />
      </div>
      <div className="split right">
        <UpgradeMenu cookieCount={cookieCount} />
      </div>
    </>
  );
};

export default App;
