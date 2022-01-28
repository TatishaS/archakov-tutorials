import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Form({ onAddComment }) {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [text, setText] = React.useState('');

  const formatCurrentDate = () => {
    const now = new Date();
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    const date = new Intl.DateTimeFormat('en-GB', options).format(now);
    return date;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (fullName.trim().length && email.trim().length && text.trim().length) {
      const date = formatCurrentDate();

      const newReview = {
        fullName: fullName.trim(),
        email: email.trim(),
        createdAt: date,
        text: text.trim(),
      };
      console.log(newReview);

      onAddComment(newReview, e);
      setFullName('');
      setEmail('');
      setText('');
    } else {
      alert('У вас не заполнены поля');
    }
  };

  return (
    <Box
      sx={{
        width: 400,
        my: 0,
        mx: 'auto',
        bgcolor: '#fff',
        border: '1px solid #bdbdbd',
        borderRadius: '5px',
        pb: 3,
      }}
    >
      <Stack
        component="form"
        spacing={2}
        sx={{
          width: 350,
          mx: 'auto',
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1>Обратная связь:</h1>
        <TextField
          id="outlined-basic"
          label="Имя"
          variant="outlined"
          fullWidth
          value={fullName}
          onChange={e => {
            setFullName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Почта"
          variant="outlined"
          fullWidth
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Текст..."
          variant="outlined"
          multiline
          rows={8}
          fullWidth
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Отправить
        </Button>
      </Stack>
    </Box>
  );
}
export default Form;
