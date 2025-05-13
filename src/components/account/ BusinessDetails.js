import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
}));

const FormHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(3),
}));

const FormSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const FormField = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const PhoneInputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const CountrySelect = styled(FormControl)(({ theme }) => ({
  minWidth: 90,
}));

const PhoneInput = styled(TextField)(({ theme }) => ({
  flex: 1,
}));

const DeleteButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.error.main,
}));

const SaveButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#4caf50",
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: "#388e3c",
  },
}));

const BusinessDetails = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([
    { country: "US", number: "+1 344 434 4455" },
    { country: "US", number: "+1 344 434 4455" },
  ]);

  const handleAddPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, { country: "US", number: "" }]);
  };

  const handleRemovePhoneNumber = (index) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers.splice(index, 1);
    setPhoneNumbers(newPhoneNumbers);
  };

  const handleCountryChange = (index, value) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index].country = value;
    setPhoneNumbers(newPhoneNumbers);
  };

  const handleNumberChange = (index, value) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index].number = value;
    setPhoneNumbers(newPhoneNumbers);
  };

  return (
    <FormContainer elevation={0}>
      <FormHeader>
        <Typography variant="h6" fontWeight="bold">
          Business Details
        </Typography>
        <SaveButton
          startIcon={<SaveIcon />}
          variant="contained"
          disableElevation
        >
          Save & Close
        </SaveButton>
      </FormHeader>

      <FormSection>
        <FormField>
          <Typography variant="body2" fontWeight="medium" gutterBottom>
            Account Name
          </Typography>
          <TextField
            fullWidth
            placeholder="Account Name"
            variant="outlined"
            size="small"
            value="TRUCK GREAR"
          />
        </FormField>

        <FormField>
          <Typography variant="body2" fontWeight="medium" gutterBottom>
            Email
          </Typography>
          <TextField
            fullWidth
            placeholder="Email"
            variant="outlined"
            size="small"
            value="Jillali@Onechanneladmin.Com"
            type="email"
          />
        </FormField>

        <FormField>
          <Typography variant="body2" fontWeight="medium" gutterBottom>
            Phone Number
          </Typography>
          {phoneNumbers.map((phone, index) => (
            <PhoneInputContainer key={index}>
              <CountrySelect variant="outlined" size="small">
                <Select
                  value={phone.country}
                  onChange={(e) => handleCountryChange(index, e.target.value)}
                  displayEmpty
                  sx={{ height: "40px" }}
                >
                  <MenuItem value="US">
                    <Box component="span" sx={{ mr: 1 }}>
                      🇺🇸
                    </Box>{" "}
                    US
                  </MenuItem>
                  <MenuItem value="UK">
                    <Box component="span" sx={{ mr: 1 }}>
                      🇬🇧
                    </Box>{" "}
                    UK
                  </MenuItem>
                  <MenuItem value="CA">
                    <Box component="span" sx={{ mr: 1 }}>
                      🇨🇦
                    </Box>{" "}
                    CA
                  </MenuItem>
                </Select>
              </CountrySelect>

              <PhoneInput
                placeholder="Phone Number"
                variant="outlined"
                size="small"
                value={phone.number}
                onChange={(e) => handleNumberChange(index, e.target.value)}
              />

              <DeleteButton onClick={() => handleRemovePhoneNumber(index)}>
                <DeleteOutlineIcon />
              </DeleteButton>
            </PhoneInputContainer>
          ))}
          <Button
            startIcon={<AddIcon />}
            variant="text"
            onClick={handleAddPhoneNumber}
            sx={{ textTransform: "none" }}
          >
            Add Phone Number
          </Button>
        </FormField>

        <FormField>
          <Typography variant="body2" fontWeight="medium" gutterBottom>
            Contact Owner
          </Typography>
          <TextField
            select
            fullWidth
            variant="outlined"
            size="small"
            value="Suchithkumar@Onechanneladmin.Com"
          >
            <MenuItem value="Suchithkumar@Onechanneladmin.Com">
              Suchithkumar@Onechanneladmin.Com
            </MenuItem>
            <MenuItem value="support@onechanneladmin.com">
              support@onechanneladmin.com
            </MenuItem>
          </TextField>
        </FormField>
      </FormSection>
    </FormContainer>
  );
};

export default BusinessDetails;
