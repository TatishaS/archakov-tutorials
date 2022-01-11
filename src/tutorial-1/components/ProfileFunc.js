function Profile(props) {
  const date = props.registredAt;
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const datePrinted = date.toLocaleString('ru-RU', options);

  return (
    <div>
      <p>
        Привет, <b>{props.name.split(' ', 1)}!</b>
      </p>
      <span>Дата регистрации: {datePrinted}</span>
    </div>
  );
}

export default Profile;
