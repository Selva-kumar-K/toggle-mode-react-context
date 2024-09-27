import { useState } from "react";
import { UserContext } from "../utils/contexts/userContext";
import List from "./List";

export default function Store() {
  const [users, setUserData] = useState({});
  return (
    <div>
      <UserContext.Provider value={{ ...users, setUserData }}>
        <List />
      </UserContext.Provider>
    </div>
  );
}
