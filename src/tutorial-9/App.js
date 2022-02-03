import axios from 'axios';
import React from 'react';

const App = () => {
  const [users, setUsers] = React.useState([]);

  const [uploading, setUploading] = React.useState(false);

  const getUsers = async () => {
    const { data } = await axios.get(url);
    setUsers(data);
  };
  const url = 'https://61f960e969307000176f71f2.mockapi.io/users';

  const createUser = () => {
    const emailElem = document.querySelector('#email');
    const usernameElem = document.querySelector('#username');
    const data = {
      email: emailElem.ariaValueMax,
      name: usernameElem.value,
    };
    axios.post(url, data);
  };

  const uploadFile = async () => {
    const fileElem = document.querySelector('#file');
    const file = fileElem.files[0];

    setUploading(true);

    const formData = new FormData();

    formData.append('file', file);

    await axios.post('http://localhost:9999', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setUploading(false);
  };

  return (
    <div>
      <ul>
        {users.map(obj => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Загрузить список пользователей</button>
      <div>
        <h4>Создать пользователя:</h4>
        <input id="email" placeholder="Email" />
        <input id="username" placeholder="Имя" />
        <button onClick={createUser}>Отправить</button>
      </div>

      <br />
      <br />
      <hr />
      <div>
        <h4>Загрузка файла:</h4>
        <input id="file" type="file" />
        <button disabled={uploading} onClick={uploadFile}>
          Загрузить
        </button>
        {uploading && (
          <p>
            <b>Идёт загрузка...</b>
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
