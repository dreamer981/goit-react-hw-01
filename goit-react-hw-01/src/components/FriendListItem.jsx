/* eslint-disable react/prop-types */
import "./FriendListItem.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend-item">
      <img src={avatar} alt="Avatar" width="48" className="friend-avatar" />
      <p className="friend-name">{name}</p>
      <p className={`status ${isOnline ? "online" : "offline"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
