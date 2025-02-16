import Profile from "./components/Profile";
import FriendList from "./components/FriendList";
import friends from "./friends.json";
import userData from "./userData.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;

