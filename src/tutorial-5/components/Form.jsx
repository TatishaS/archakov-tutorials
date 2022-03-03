import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Form({ onAddComment }) {
  const [inputs, setInputs] = React.useState({
    fullName: '',
    email: '',
    text: '',
  });

  const { fullName = '', email = '', text = '' } = inputs;

  const handleSubmit = e => {
    e.preventDefault();

    if (fullName.trim() && email.trim() && text.trim()) {
      const newReview = {
        fullName: fullName.trim(),
        email: email.trim(),
        createdAt: new Date(),
        text: text.trim(),
        id: inputs.length ? inputs[inputs.length - 1].id + 1 : 0,
      };

      onAddComment(newReview);

      setInputs({
        fullName: '',
        email: '',
        text: '',
      });
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
            setInputs({ ...inputs, fullName: e.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Почта"
          variant="outlined"
          fullWidth
          value={email}
          onChange={e => {
            setInputs({ ...inputs, email: e.target.value });
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
            setInputs({ ...inputs, text: e.target.value });
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
