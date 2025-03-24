import { UserProvider } from "./context_API/User_Context";
import ProfileUser from "./context_API/ProfileUser";
// import Parent from "./lift_state_up/Parent";

const App = () => {
  return (
    <>
      <UserProvider>
        <ProfileUser />
      </UserProvider>
      {/* <Parent /> */}
    </>
  );
};

export default App;
