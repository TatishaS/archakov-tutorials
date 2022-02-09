import React from 'react';

const Profile = ({ user }) => {
  console.log(user);
  const {
    login,
    name,
    bio,
    location,
    avatar_url,
    blog,
    public_repos,
    followers,
    following,
  } = user;

  const convertToK = num => {
    if (num >= 1000000) {
      num = (num / 1000000).toFixed(1) + 'm';
    } else if (num >= 1000) {
      num = (num / 1000).toFixed(1) + 'k';
    }
    return num;
  };
  return (
    <div className="app-user">
      <div className="app-user_info">
        <div className="app-user_image">
          <img
            style={{ width: '140px', borderRadius: '50%' }}
            src={avatar_url}
            alt=""
          />
        </div>
        <div className="app-user_data">
          <h1 className="app-user_name">
            {name}
            <span>@{login}</span>
          </h1>
          <p className="app-user_about">{bio}</p>
        </div>
      </div>
      <ul className="app-user_stats">
        <li className="app-user_stats-item">
          Репозитории
          <span>{public_repos}</span>
        </li>
        <li className="app-user_stats-item">
          Подписчиков
          <span>{followers ? convertToK(followers) : '0'}</span>
        </li>
        <li className="app-user_stats-item">
          Подписок
          <span>{following ? convertToK(following) : '0'}</span>
        </li>
      </ul>
      <ul className="app-user_location">
        <li className="app-user_location-item">{location}</li>
        <li className="app-user_location-item">
          <a href={blog}>{blog}</a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
