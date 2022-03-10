import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

export const Error = () => {
  return (
    <div className="page">
      <h1 className="page__title">Ошибка 404 </h1>
      <div className="page__content">
        <p>Страница не найдена</p>
        <Link to="/">
          <Button>На главную</Button>
        </Link>
      </div>
    </div>
  );
};
