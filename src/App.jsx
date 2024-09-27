import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { ToggleContext } from "./utils/contexts/ToggleMode";

export default function App() {
  const [toggle, setToggle] = useState({
    dark : false
  });
  console.log(toggle.dark);

  const bgColor = toggle.dark ? "black" : "white";
  const textColor = toggle.dark ? "white" : "black"


  return (
    <ToggleContext.Provider value={{ ...toggle, setToggle }}>
      <div style={{ height: "100vh", backgroundColor: bgColor, color: textColor }}>
        <Header />
        <Home />
      </div>
    </ToggleContext.Provider>
  );
}
