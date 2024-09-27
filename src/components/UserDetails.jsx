import { PropTypes } from "prop-types";
import { useState } from "react";
export default function UserDetails({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUserName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  return (
    <div>
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      <button
        onClick={() => {
          setUsers((prevState) => {
            return prevState.filter((data) => data.id !== user.id);
          });
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setUsers((prevState) => {
            return prevState.map((data) =>
              data.id == user.id ? { ...data, username, email } : data
            );
          });
          setIsEditing(false);
        }}
      >
        Save
      </button>
      <h1 className="selva">ID: {user.id}</h1>
      <h2>
        Name :{" "}
        {isEditing ? (
          <input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        ) : (
          <span>{user.username}</span>
        )}
      </h2>
      <h3>
        Email :{" "}
        {isEditing ? (
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        ) : (
          <span>{user.email}</span>
        )}
      </h3>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,

  setUsers: PropTypes.func.isRequired,
};
