import React from 'react';
import { Box, Avatar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  backgroundColor: '#6b46c1',
  color: 'white',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginRight: theme.spacing(2),
  position: 'relative',
}));

const EditButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  bottom: -5,
  right: -5,
  minWidth: 'unset',
  width: 20,
  height: 20,
  fontSize: '0.6rem',
  padding: 0,
  borderRadius: '50%',
  backgroundColor: '#4fc3f7',
  color: 'white',
  '&:hover': {
    backgroundColor: '#03a9f4',
  },
}));

const BusinessTag = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffb74d',
  color: 'white',
  borderRadius: theme.spacing(0.5),
  padding: '3px 8px',
  fontSize: '0.7rem',
  fontWeight: 'bold',
  marginLeft: theme.spacing(1),
}));

const ProfileHeader = () => {
  return (
    <ProfileContainer>
      <AvatarStyled>
        TG
        <EditButton>Edit</EditButton>
      </AvatarStyled>
      
      <Box>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            Truck Grear
          </Typography>
          <BusinessTag>BUSINESS</BusinessTag>
        </Box>
        
        <Typography variant="body2" color="text.secondary">
          jillali@onechanneladmin.com
        </Typography>
        
        <Button 
          variant="text" 
          color="primary" 
          sx={{ p: 0, mt: 1, textTransform: 'none' }}
        >
          Change Status
        </Button>
      </Box>
    </ProfileContainer>
  );
};

export default ProfileHeader;