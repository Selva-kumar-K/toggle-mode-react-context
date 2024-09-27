import { useContext, useEffect } from "react";
import { UserContext } from "../utils/contexts/userContext";
import { useFetchData } from "../utils/hooks/useFetchData";

export default function Data() {
  const { name, setUserData } = useContext(UserContext);
  const { data, error, loading } = useFetchData(1);
  console.log(loading)

  useEffect(() => {
    setUserData(data);
  }, [data, setUserData]);
  return (
    <>
      <div>
        {loading ? "Loading" : <h1>{name}</h1>}
        <button
          onClick={() =>
            setUserData((prev) => ({
              ...prev,
              username: "SelvaKumar",
              name: "SK",
            }))
          }
        >
          Click to change the name in Captial letter
        </button>
      </div>
    </>
  );
}
