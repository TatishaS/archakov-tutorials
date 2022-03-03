import React from 'react';
import Stack from '@mui/material/Stack';
import Reviews from './components/Reviews';
import EmptyBlock from './components/EmptyBlock';
import Form from './components/Form';

function App() {
  const [commentsArr, setCommentsArr] = React.useState([]);

  /* ПОЛУЧАЕМ КОММЕНТЫ ИЗ localStorage */
  // ПРОВЕРИТЬ, почему комменты стираются из localStorage при обновлении страницы
  React.useEffect(() => {
    const localComments = JSON.parse(localStorage.getItem('comments')) || [];
    setCommentsArr(localComments);
  }, []);

  /* СОХРАНЯЕМ КОММЕНТЫ В localStroage */
  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(commentsArr));
  }, [commentsArr]);

  const addComment = commentObj => {
    setCommentsArr([commentObj, ...commentsArr]);
  };

  return (
    <Stack
      sx={{
        py: 3,
        bgcolor: 'grey.100',
        boxSizing: 'border-box',
      }}
    >
      {commentsArr.length > 0 ? (
        <Reviews comments={commentsArr} />
      ) : (
        <EmptyBlock />
      )}
      <Form onAddComment={addComment} />
    </Stack>
  );
}

export default App;
