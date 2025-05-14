import React, { useContext, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import styled from "styled-components";
import ThemeContext from "../../../context/ThemeContext";
import { red } from "@mui/material/colors";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1.5, 2),
  borderBottom: `1px solid ${theme.colors.border.card}`,
}));

const ActivityItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1, 2),
}));

const DateLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  padding: theme.spacing(1.5, 2, 0.5),
}));

const TimeText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  color: theme.colors.text.secondary,
  marginTop: "4px",
}));

const StyledTab = styled(Tab)({
  textTransform: "none",
  minWidth: 80,
  fontWeight: "medium",
  padding: "10px 16px",
  color: "inherit",
  transition: "all 0.2s ease",
  height: "38px",
  "&.Mui-selected": {
    color: "#6B46C1",
    fontWeight: "bold",
    backgroundColor: "rgba(107, 70, 193, 0.1)",
  },
});

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const activities = [
  {
    id: 1,
    type: "message",
    user: "Christian Wood",
    action: "Sent Message to",
    recipient: "Nikita Houston",
    time: "1 min ago",
    date: "TODAY",
    color: "#ff9800",
  },
  {
    id: 2,
    type: "reply",
    user: "Nikita Houston",
    action: "Reply your message",
    content: "Hello",
    time: "1 min ago",
    date: "TODAY",
    color: "#2196f3",
  },
  {
    id: 3,
    type: "order",
    user: "Christian Wood",
    action: "Accept Order from",
    source: "Ebay",
    time: "1 min ago",
    date: "TODAY",
    color: "#f44336",
  },
  {
    id: 4,
    type: "reply",
    user: "Rohan Walker",
    action: "Reply your message",
    source: "Ebay",
    time: "1 min ago",
    date: "TODAY",
    color: "#2196f3",
  },
  {
    id: 5,
    type: "reply",
    user: "Rohan Walker",
    action: "Reply your message",
    source: "Ebay",
    time: "1 min ago",
    date: "TODAY",
    color: "#2196f3",
  },
  {
    id: 6,
    type: "order",
    user: "Christian Wood",
    action: "Accept Order from",
    source: "Amazon",
    time: "12:30PM",
    date: "YESTERDAY",
    color: "#f44336",
  },
];

const groupByDate = (items) => {
  return items.reduce((acc, item) => {
    if (!acc[item.date]) {
      acc[item.date] = [];
    }
    acc[item.date].push(item);
    return acc;
  }, {});
};

const RecentActivities = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);
  const [view, setView] = useState(0);
  const groupedActivities = groupByDate(activities);

  const handleChange = (event, newValue) => {
    setView(newValue);
  };

  // Get the active background color based on theme
  const activeBackgroundColor = isDarkMode ? "#8378FF" : "#FFF";

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        width: "100%",
        border: `1px solid ${theme.colors.border.card}`,
        backgroundColor: theme.colors.background.main,
      }}
    >
      <HeaderContainer>
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "24px",
            color: theme.colors.text.primary,
            padding: "10px",
          }}
        >
          Recent Activities
        </Typography>

        <StyledTabs
          value={view}
          onChange={handleChange}
          sx={{
            border: `1px solid ${theme.colors.border.card}`,
            borderRadius: "24px",
            height: "38px",
          }}
        >
          <StyledTab
            label="Message"
            sx={{
              borderRadius: "20px",
              "&.Mui-selected": {
                backgroundColor: activeBackgroundColor,
                color: theme.colors.primary.main,
                height: "38px",
                fontSize: "14px",
                fontWeight: "500",
              },
            }}
          />
          <StyledTab
            label="Email"
            sx={{
              borderRadius: "20px",
              "&.Mui-selected": {
                backgroundColor: activeBackgroundColor,
                color: theme.colors.primary.main,
                height: "38px",
                fontSize: "14px",
                fontWeight: "500",
              },
            }}
          />
        </StyledTabs>
      </HeaderContainer>

      <List sx={{ p: 0, maxHeight: 370, overflow: "auto" }}>
        {Object.keys(groupedActivities).map((date) => (
          <Box key={date}>
            <DateLabel
              sx={{
                color: theme.colors.text.primary,
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "18px",
                padding: "10px",
              }}
            >
              {date}
            </DateLabel>

            {groupedActivities[date].map((activity) => (
              <ActivityItem key={activity.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      bgcolor: activity.color,
                      width: 36,
                      height: 36,
                      fontSize: "10px",
                    }}
                  >
                    {activity.type === "message"
                      ? "chat"
                      : activity.type === "reply"
                      ? "forum"
                      : "shopping_cart"}
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Box component="span">
                      <Typography
                        component="span"
                        sx={{
                          color: theme.colors.text.primary,
                          fontWeight: "medium",
                          fontSize: "14px",
                        }}
                      >
                        {activity.user}
                      </Typography>
                      <Typography component="span" color="text.primary">
                        {" "}
                        {activity.action}{" "}
                      </Typography>
                      {activity.recipient && (
                        <Typography
                          component="span"
                          sx={{
                            color: theme.colors.text.primary,
                            fontWeight: "medium",
                          }}
                        >
                          {activity.recipient}
                        </Typography>
                      )}
                      {activity.source && (
                        <Typography
                          component="span"
                          sx={{
                            color: theme.colors.text.primary,
                            fontWeight: "medium",
                          }}
                        >
                          {activity.source}
                        </Typography>
                      )}
                      {activity.content && (
                        <Typography
                          component="span"
                          sx={{
                            fontWeight: "medium",
                            fontSize: "14px",
                          }}
                        >
                          {" "}
                          "
                          <Typography
                            component="span"
                            sx={{
                              color: theme.colors.text.primary,
                              fontSize: "2px",
                            }}
                          >
                            {activity.content}
                          </Typography>
                          "
                        </Typography>
                      )}
                    </Box>
                  }
                  secondary={<TimeText>• {activity.time}</TimeText>}
                  disableTypography
                />
              </ActivityItem>
            ))}
          </Box>
        ))}
      </List>
    </Paper>
  );
};

export default RecentActivities;
