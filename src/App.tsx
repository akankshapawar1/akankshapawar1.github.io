import { useEffect } from "react";
import { ANALYTICS_MEASUREMENT_ID } from "./pages/analytics";
import { Home } from "./pages/Home/Home";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {

    console.log(
      "%cIf you're interested in the code for this site, you can find it here:",
      "font-size: 1.1rem; color: #FFF;"
    );

    console.log(
      "%chttps://github.com/arhammusheer/croissant.one",
      "font-size: 1.1rem; color: #4299E1;"
    );

    ReactGA.initialize(ANALYTICS_MEASUREMENT_ID);
    ReactGA.send("pageview");
  }, []);

  return <Home />;
}

export default App;
