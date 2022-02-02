import React from 'react';

const App = () => {
  const [users, setUsers] = React.useState([]);
  const url = 'https://61f960e969307000176f71f2.mockapi.io/users';

  /* VARIANT WITH FETCH */
  /*   const getUsers = () => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setUsers(data);
      });
  }; */

  async function getUsers() {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      } else {
        const data = await res.json();
        setUsers(data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <ul>
        {users.map((obj, i) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
    </div>
  );
};

export default App;
