import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';

function Reviews({ comments }) {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  return (
    <Box
      sx={{
        width: 400,
        m: 0,
        mx: 'auto',
        mb: 3,
        bgcolor: '#fff',
        border: '1px solid #bdbdbd',
        borderRadius: '5px',
        px: 3,
        pb: 3,
        boxSizing: 'border-box',
      }}
    >
      <Typography mt={2} fontSize={24} variant="subtitle1" component="h2">
        Отзывы:
      </Typography>
      <List sx={{ width: '100%', maxWidth: 350, bgcolor: 'background.paper' }}>
        {comments.map((item, i) => (
          <ListItem alignItems="flex-start" key={i}>
            <ListItemAvatar>
              <AccountCircleIcon fontSize="large" color="disabled" />
            </ListItemAvatar>
            <ListItemText
              primary={item.fullName}
              secondary={
                <React.Fragment>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    component="span"
                    sx={{
                      display: 'block',
                    }}
                  >
                    {item.text}
                  </Typography>
                  <span>
                    {item.createdAt.toLocaleDateString('ru', options)}
                  </span>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Reviews;
