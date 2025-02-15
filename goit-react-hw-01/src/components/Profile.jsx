/* eslint-disable react/prop-types */
import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
    
    return (
        <div className="profile">
      <div className="profile-info">
        <img src={image} alt="User avatar" className="profile-avatar" />
        <p className="profile-name">{name}</p>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>

      <ul className="profile-stats">
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;