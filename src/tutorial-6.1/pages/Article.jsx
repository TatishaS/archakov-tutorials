import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { posts } from './Home';

export const Article = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(obj => obj.id === Number(id));

  React.useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!post) {
    return <h1>Статья не найдена</h1>;
  }

  return (
    <div className="article">
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} />
      <p>{post.text}</p>
      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </div>
  );
};
