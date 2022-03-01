import React from 'react';
import Stack from '@mui/material/Stack';
import Reviews from './components/Reviews';
import EmptyBlock from './components/EmptyBlock';
import Form from './components/Form';

function App() {
  const [commentsArr, setCommentsArr] = React.useState([]);

  React.useEffect(() => {
    if (localStorage.getItem('comments')) {
      const localComments = JSON.parse(localStorage.getItem('comments'));

      setCommentsArr([...localComments]);
    } else {
      setCommentsArr([]);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(commentsArr));
  }, [commentsArr]);

  const addComment = (commentObj, e) => {
    console.log(commentObj);

    e.preventDefault();
    setCommentsArr(prevState => [commentObj, ...prevState]);
    console.log(commentsArr);
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
