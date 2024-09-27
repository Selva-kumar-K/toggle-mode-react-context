import { useState } from "react";
import UserDetails from "./UserDetails";

export default function User() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(3);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Selva",
      email: "selva@gmail.com",
    },
    {
      id: 2,
      username: "Nithish",
      email: "nithish@gmail.com",
    },
  ]);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", width: 200 }}
        onSubmit={(e) => {
          e.preventDefault();
          const newUser = {
            id: counter,
            username,
            email,
          };

          setCounter((prev) => prev + 1);
          setUsers((prevState) => [...prevState, newUser]);
          setUsername("");
          setEmail("");
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name=""
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <div>
        {users.map((user) => (
          <UserDetails key={user.id} user={user} setUsers={setUsers} />
        ))}
      </div>
    </div>
  );
}
