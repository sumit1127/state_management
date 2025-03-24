import { useContext } from "react";
import User_Context from "./User_Context";

const ProfileUser = () => {
  const { user, login, logout } = useContext(User_Context);
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome {user.name}</p>
          <p>Email {user.email}</p>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <p>please login</p>
          <button onClick={login}>login</button>
        </div>
      )}
    </div>
  );
};

export default ProfileUser;
