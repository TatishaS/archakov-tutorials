import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Article } from './pages/Article';
import { Error } from './pages/Error';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

/* function Route({ path, element, exact }) {
  const { pathname } = window.location;

  if (exact) {
    if (pathname === path) {
      return element;
    }
  } else {
    if (pathname.includes(path)) {
      return element;
    }
  }

  return null;
} */

function App() {
  //const { pathname } = window.location;
  //const articleId = window.location.pathname.split('/post/')[1];
  //console.log(articleId);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Article />} />
        <Route path="/login" element={<h1>Логин-форма</h1>} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
