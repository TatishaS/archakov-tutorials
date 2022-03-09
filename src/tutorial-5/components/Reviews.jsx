import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  Button,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Reviews({ comments, onRemove }) {
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
                  <span>{item && item.createdAt}</span>
                </React.Fragment>
              }
            />
            <Button onClick={() => onRemove(item.id)}>X</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Reviews;
