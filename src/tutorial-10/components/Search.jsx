import React from 'react';

const Search = ({ value, onChange, onClick, isLoading }) => {
  return (
    <div>
      <form className="app-form">
        <input
          type="text"
          className="app-input"
          placeholder="Укажите GitHub-аккаунт"
          value={value}
          onChange={onChange}
        />
        <button className="app-form_btn" onClick={onClick} disabled={isLoading}>
          Найти
        </button>
      </form>
    </div>
  );
};

export default Search;
