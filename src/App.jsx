/* eslint-disable no-unused-vars */

import { useState } from "react";
import Router from "./routes/Router";
import publicRoutes from "./routes/publicRoutes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  return <Router allRoutes={allRoutes} />;
}

export default App;
