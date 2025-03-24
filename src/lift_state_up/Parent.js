import { useState } from "react";

const Parent = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "xyz", email: "xyz@example.com" });
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome {user.name}</p>
          <p>Email {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please login</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Parent;
