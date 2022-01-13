function Form() {
  let email = '';
  let password = '';

  function onChangeHandler(e) {
    if (e.target.type === 'text') {
      email = e.target.value.trim();
    } else if (e.target.type === 'password') {
      password = e.target.value.trim();
    } else console.log('мимо');
  }

  function handleSubmit(e) {
    /* if click -> event.target.type = submit */
    if (!email || !password) {
      alert('Будь другом, заполни оба поля.');
      return;
    }
    e.preventDefault();
    console.log('ФОрма засабмичена', email, password);
    e.target.reset();
  }

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="email"
          type="text"
          placeholder="E-mail"
          id="email"
          onChange={onChangeHandler}
        ></input>
        <input
          className="pass"
          type="password"
          placeholder="Пароль"
          id="password"
          onChange={onChangeHandler}
        ></input>
        <button className="btn" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Form;
