import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

interface IProfile {
  name?: string;
}

const Profile: FC<IProfile> = (props): ReactElement => {
  const { name = 'Nicky' } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="AI Alien"
          src="AIalien.png"
          sx={{
            width: '80px',
            height: '80px',
            cursor: 'pointer',
            marginBottom: '1rem',
            transition:
              'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            boxShadow:
              '0px 0px 0px 5px rgba(233, 0, 0, 0.5), 0px 0px 0px 9px rgba(0, 60, 50, 0.7)',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow:
                '0px 0px 0px 4px rgba(0, 0, 0, 0.2), 0px 0px 0px 12px rgba(0, 0, 0, 0.2)',
            },
          }}
        />
      </Stack>
      <Typography variant="h6" color="text.primary">
        Welcome {name}
      </Typography>
      <Typography variant="body1" color="rgba(255, 255, 255, 0.3)">
        This is your task tracker
      </Typography>
    </Box>
  );
};

export default Profile;
