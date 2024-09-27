import { createContext } from "react";

export const ToggleContext = createContext({
  dark: false,
  setToggle: () => {},
});
