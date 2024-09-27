import { useState } from "react";

export default function Login() {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    displayName: "",
  });
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          gap: 10,
        }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formFields);
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name=""
          id="username"
          value={formFields.username}
          onChange={(e) => setFormFields((prevState) => ({...prevState, username: e.target.value}))}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name=""
          id="password"
          value={formFields.password}
          onChange={(e) => setFormFields((prevState) => ({...prevState, password : e.target.value}))}
        />
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          name=""
          id="displayName"
          value={formFields.displayName}
          onChange={(e) => setFormFields((prevState) => ({...prevState, displayName: e.target.value}))}
        />
        <button
          style={{
            padding: 10,
            backgroundColor: "blue",
            color: "white",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      <div>
        <p>Username : {formFields.username}</p>
        <p>Password : {formFields.password}</p>
        <p>DisplayName : {formFields.displayName}</p>
      </div>
    </div>
  );
}
