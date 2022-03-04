import React from 'react';
import Stack from '@mui/material/Stack';
import Reviews from './components/Reviews';
import EmptyBlock from './components/EmptyBlock';
import Form from './components/Form';

function App() {
  const [commentsArr, setCommentsArr] = React.useState([]);

  /* ПОЛУЧАЕМ КОММЕНТЫ ИЗ localStorage */

  React.useEffect(() => {
    if (localStorage.getItem('comments')) {
      const localComments = JSON.parse(localStorage.getItem('comments')) || [];

      setCommentsArr(localComments);
    }
  }, []);

  /* СОХРАНЯЕМ КОММЕНТЫ В localStroage */
  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(commentsArr));
  }, [commentsArr]);

  const addComment = commentObj => {
    setCommentsArr([commentObj, ...commentsArr]);
  };

  /* const onRemoveItem = id => {
    console.log('Был клик');
    console.log(id);
  };
 */
  return (
    <Stack
      sx={{
        py: 3,
        bgcolor: 'grey.100',
        boxSizing: 'border-box',
      }}
    >
      {commentsArr.length > 0 ? (
        <Reviews comments={commentsArr} /* onRemove={onRemoveItem} */ />
      ) : (
        <EmptyBlock />
      )}
      <Form onAddComment={addComment} />
    </Stack>
  );
}

export default App;
