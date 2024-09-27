import { PropTypes } from "prop-types";
import { useContext } from "react";
import { ToggleContext } from "../utils/contexts/ToggleMode";

export default function Items({ nav }) {
  const { dark } = useContext(ToggleContext);

  const whiteColor = {
    color: "black",
    border: "2px solid black",
    cursor: "pointer",
    backgroundColor: "#f5f1f1c7",
    padding: "0px 20px",
  };
  const blackColor = {
    color: "white",
    border: "2px solid white",
    cursor: "pointer",
    backgroundColor: "black",
    padding: "0px 20px",
  };

  const toggle = dark ? blackColor : whiteColor;
  return <li style={toggle}>{nav}</li>;
}

Items.propTypes = {
  nav: PropTypes.string.isRequired,
};
