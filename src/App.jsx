/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Router from "./routes/Router";
import publicRoutes from "./routes/publicRoutes";
import { getRoutes } from "./routes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  useEffect(() => {
    const route = getRoutes();
    console.log("route: ", route);
    console.log(allRoutes.includes(route));
    setAllRoutes((prevRoutes) => [...prevRoutes, route]);
  }, []);
  console.log("allRoute: ", allRoutes);
  return <Router allRoutes={allRoutes} />;
}

export default App;
