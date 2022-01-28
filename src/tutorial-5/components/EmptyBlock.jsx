import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

function EmptyBlock() {
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
        textAlign: 'center',
      }}
    >
      <Typography
        mt={2}
        fontSize={24}
        variant="subtitle1"
        component="h2"
        gutterBottom
      >
        Отзывов еще нет. Поделитесь мнением первым!
      </Typography>
      <RecordVoiceOverIcon
        color="disabled"
        sx={{ fontSize: 40, textAlign: 'center' }}
      />
    </Box>
  );
}

export default EmptyBlock;
