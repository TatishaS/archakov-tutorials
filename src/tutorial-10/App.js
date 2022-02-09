import React from 'react';
import Search from './components/Search';
import Profile from './components/Profile';

import ErrorBlock from './components/ErrorBlock';
import axios from 'axios';

const App = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [userObj, setUserObj] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [userLoaded, setUserLoaded] = React.useState(false);

  const url = 'https://api.github.com/users/';

  const getData = async searchQuery => {
    setError(false);
    setUserLoaded(false);
    setIsLoading(true);

    try {
      const { data } = await axios.get(`${url}${searchQuery}`);

      if (data) {
        setUserObj(data);
        setUserLoaded(true);
      }
    } catch (err) {
      // Выводим ошибку пользователю
      setError(true);
      setIsLoading(false);
      setUserLoaded(false);
      // и заодно в консоли
      console.error(err);
      throw err;
    }
    setIsLoading(false);
  };

  const handleSearch = e => {
    e.preventDefault();

    if (!inputValue) return;
    getData(inputValue);
    setInputValue('');
  };

  return (
    <div id="app">
      <div className="app-container">
        <Search
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onClick={handleSearch}
          isLoading={isLoading}
        />

        {isLoading && <h2>Загрузка результатов...</h2>}
        {error && <ErrorBlock />}
        {userLoaded && <Profile user={userObj} />}
      </div>
    </div>
  );
};

export default App;
