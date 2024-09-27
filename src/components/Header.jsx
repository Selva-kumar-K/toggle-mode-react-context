import { useContext } from "react";
import Items from "./Items";
import { ToggleContext } from "../utils/contexts/ToggleMode";

export default function Header() {
  const navItems = ["Products", "Services", "Pricing"];
  const { dark, setToggle } = useContext(ToggleContext);

  const whiteColor = {
    color: "black",
    border: "2px solid black",
    cursor: "pointer",
    backgroundColor: "#f5f1f1c7",
    padding: "0px 20px",
  }
  const blackColor = {
    color: "white",
    border: "2px solid white",
    cursor: "pointer",
    backgroundColor: "black",
    padding: "0px 20px",
  }

  const toggle = dark ? blackColor : whiteColor
  return (
    <div
      style={{
        height: "10vh",
        borderBottom: `2px solid ${dark ? "white" : "black"}`,
        backgroundColor: "",
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          float: "right",
        }}
      >
        {navItems.map((nav, index) => (
          <div
            key={index}
            style={{ border: "2px solid black", backgroundColor: "#f5f1f1c7" }}
          >
            <Items nav={nav} />
          </div>
        ))}
        <button
          onClick={() => setToggle((prev) => ({ ...prev, dark: !prev.dark }))}
          style={toggle}
        >
          Toggle Mode
        </button>
      </ul>
    </div>
  );
}
