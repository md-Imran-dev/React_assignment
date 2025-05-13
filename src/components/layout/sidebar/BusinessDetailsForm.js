import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SaveIcon from '@mui/icons-material/Save';
import PhoneNumberInput from './PhoneNumberInput';
import AddIcon from '@mui/icons-material/Add';


const BusinessDetailsForm = () => {
  const [formData, setFormData] = useState({
    accountName: 'TRUCK GREAR',
    email: 'Jillali@Onechanneladmin.Com',
    contactOwner: 'Suchithkumar@Onechanneladmin.Com',
    phoneNumbers: [
      { country: 'US', number: '+1 344 434 4455' },
      { country: 'US', number: '+1 344 434 4455' }
    ]
  });

  const handleAddPhone = () => {
    setFormData({
      ...formData,
      phoneNumbers: [...formData.phoneNumbers, { country: 'US', number: '' }]
    });
  };

  const handleRemovePhone = (index) => {
    const updatedPhones = [...formData.phoneNumbers];
    updatedPhones.splice(index, 1);
    setFormData({ ...formData, phoneNumbers: updatedPhones });
  };

  const handleChangeCountry = (index, value) => {
    const updatedPhones = [...formData.phoneNumbers];
    updatedPhones[index].country = value;
    setFormData({ ...formData, phoneNumbers: updatedPhones });
  };

  const handleChangeNumber = (index, value) => {
    const updatedPhones = [...formData.phoneNumbers];
    updatedPhones[index].number = value;
    setFormData({ ...formData, phoneNumbers: updatedPhones });
  };

  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          Business Details
        </Typography>
        
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          sx={{
            backgroundColor: '#4caf50',
            '&:hover': { backgroundColor: '#388e3c' },
            textTransform: 'none',
          }}
        >
          Save & Close
        </Button>
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Account Name
        </Typography>
        <TextField
          fullWidth
          value={formData.accountName}
          onChange={(e) => setFormData({ ...formData, accountName: e.target.value })}
          variant="outlined"
          size="small"
        />
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Email
        </Typography>
        <TextField
          fullWidth
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          variant="outlined"
          size="small"
        />
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle2" gutterBottom>
            Phone Number
          </Typography>
          <IconButton
            color="primary"
            size="small"
            sx={{ color: '#9c27b0' }}
          >
            <AddIcon />
          </IconButton>
        </Box>
        
        <PhoneNumberInput 
          phoneNumbers={formData.phoneNumbers}
          onAddPhone={handleAddPhone}
          onRemovePhone={handleRemovePhone}
          onChangeCountry={handleChangeCountry}
          onChangeNumber={handleChangeNumber}
        />
      </Box>
      
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Contact Owner
        </Typography>
        <TextField
          select
          fullWidth
          value={formData.contactOwner}
          onChange={(e) => setFormData({ ...formData, contactOwner: e.target.value })}
          variant="outlined"
          size="small"
          SelectProps={{
            IconComponent: KeyboardArrowDownIcon,
            native: false,
            renderValue: (value) => value,
          }}
        >
          <option value="Suchithkumar@Onechanneladmin.Com">
            Suchithkumar@Onechanneladmin.Com
          </option>
          <option value="support@onechanneladmin.com">
            support@onechanneladmin.com
          </option>
        </TextField>
      </Box>
    </Paper>
  );
};

export default BusinessDetailsForm;