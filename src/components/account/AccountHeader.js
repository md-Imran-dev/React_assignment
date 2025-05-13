import React from "react";
import {
  Box,
  Paper,
  Typography,
  Avatar,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import EventIcon from "@mui/icons-material/Event";
import BusinessDetails from "../layout/sidebar/BusinessDetailsForm";

const AccountAvatar = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  backgroundColor: theme.palette.primary.main,
  fontSize: "1.5rem",
  fontWeight: "bold",
}));

const ActionButton = styled(Button)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(1),
  minWidth: "auto",
}));

const AccountHeader = () => {
  return (
    <Box>
      <Paper elevation={0} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <AccountAvatar>TG</AccountAvatar>
          <Box sx={{ ml: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="h6" fontWeight="bold">
                Truck Grear
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  backgroundColor: "#ffb74d",
                  color: "#fff",
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  fontWeight: "bold",
                }}
              >
                BUSINESS
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              jillali@onechanneladmin.com
            </Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ mt: 2, mb: 2, textTransform: "none" }}
          onClick={() => {}}
        >
          Change Status
        </Button>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={1}>
          <Grid item xs={3}>
            <ActionButton color="inherit">
              <EmailIcon fontSize="small" />
              <Typography variant="caption" sx={{ mt: 0.5 }}>
                Email
              </Typography>
            </ActionButton>
          </Grid>
          <Grid item xs={3}>
            <ActionButton color="inherit">
              <PhoneIcon fontSize="small" />
              <Typography variant="caption" sx={{ mt: 0.5 }}>
                Call
              </Typography>
            </ActionButton>
          </Grid>
          <Grid item xs={3}>
            <ActionButton color="inherit">
              <MessageIcon fontSize="small" />
              <Typography variant="caption" sx={{ mt: 0.5 }}>
                Message
              </Typography>
            </ActionButton>
          </Grid>
          <Grid item xs={3}>
            <ActionButton color="inherit">
              <EventIcon fontSize="small" />
              <Typography variant="caption" sx={{ mt: 0.5 }}>
                Calendar
              </Typography>
            </ActionButton>
          </Grid>
        </Grid>
      </Paper>

      <BusinessDetails />
    </Box>
  );
};

export default AccountHeader;
