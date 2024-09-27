import { useContext } from "react";
import { UserContext } from "../utils/contexts/userContext";
import Data from "./Data";

export default function List() {
  const { username } = useContext(UserContext);
  return (
    <div>
      <h1>{username}</h1>
      <Data />
    </div>
  );
}
