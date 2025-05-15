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
  Tabs,
  Tab,
} from "@mui/material";
import styled from "styled-components";
import ThemeContext from "../../../context/ThemeContext";
import {
  getActivityIcon,
  activities,
  processActivitiesRelationships,
} from "../../../data/activitiesData";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1.5, 2),
  borderBottom: `1px solid ${theme.colors.border.card}`,
}));

// Styled Activity Item with conditional timeline connections
const ActivityItem = styled(ListItem)(
  ({ theme, isReply, hasTimeline, firstMessage }) => ({
    padding: theme.spacing(1, 2),
    position: "relative",
    marginLeft: isReply ? theme.spacing(5) : 0,
    // Add timeline connector for replied messages
    ...(hasTimeline && {
      "&::before": {
        content: '""',
        position: "absolute",
        top: firstMessage ? "50%" : 0,
        bottom: 0,
        left: isReply ? 6 : 26,
        width: 2,
        height: firstMessage ? "50%" : "100%",
        backgroundColor: theme.colors.border.card,
        zIndex: 0,
      },
    }),
  })
);

const DateLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  padding: theme.spacing(2, 2, 1),
  fontSize: "12px",
  color: theme.colors.text.primary,
}));

const TimeText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.colors.text.secondary,
  display: "inline-flex",
  alignItems: "center",
  fontWeight: "500",
}));

const StyledTab = styled(Tab)({
  textTransform: "none",
  minWidth: 80,
  fontWeight: "medium",
  padding: "10px 16px",
  color: "inherit",
  transition: "all 0.2s ease",
  height: "25px",
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

const ScrollableList = styled(List)`
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

// Group activities by date
const groupByDate = (items) => {
  return items.reduce((acc, item) => {
    if (!acc[item.date]) {
      acc[item.date] = [];
    }
    acc[item.date].push(item);
    return acc;
  }, {});
};

// Check if an activity should have a timeline connector
const shouldHaveTimeline = (activity, allActivities) => {
  // If it's a reply, it should connect to its parent
  if (activity.isReply) {
    return true;
  }

  // If it has replies, it should connect to them
  if (activity.hasReplies) {
    // Check if there are actually any replies to this activity
    return allActivities.some((item) => item.replyTo === activity.id);
  }

  return false;
};

// Check if an activity is the first in a conversation thread
const isFirstInThread = (activity, index, dateGroup) => {
  if (!activity.isReply) {
    return true;
  }

  // Check if this is the first reply to a specific parent
  for (let i = 0; i < index; i++) {
    if (
      dateGroup[i].id === activity.replyTo ||
      (dateGroup[i].isReply && dateGroup[i].replyTo === activity.replyTo)
    ) {
      return false;
    }
  }

  return true;
};

const RecentActivities = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);
  const [view, setView] = useState(0);

  // Process activities to determine relationships
  const processedActivities = processActivitiesRelationships(activities);
  const groupedActivities = groupByDate(processedActivities);

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

      <ScrollableList sx={{ p: 0, maxHeight: 370, overflow: "auto" }}>
        {Object.keys(groupedActivities).map((date) => (
          <Box key={date}>
            <DateLabel
              sx={{
                color: theme.colors.text.primary,
                padding: "16px 16px 8px",
              }}
            >
              {date}
            </DateLabel>

            <Box>
              {groupedActivities[date].map((activity, index) => (
                <ActivityItem
                  key={activity.id}
                  alignItems="flex-start"
                  isReply={activity.isReply}
                  hasTimeline={shouldHaveTimeline(
                    activity,
                    processedActivities
                  )}
                  firstMessage={isFirstInThread(
                    activity,
                    index,
                    groupedActivities[date]
                  )}
                >
                  <ListItemAvatar
                    sx={{
                      minWidth: activity.isReply ? "40px" : "56px",
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: activity.color,
                        width: 24,
                        height: 24,
                      }}
                    >
                      {getActivityIcon(activity.type, activity.color)}
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText
                    primary={
                      <Box component="span">
                        <Typography
                          component="span"
                          sx={{
                            color: "#5559ca",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                        >
                          {activity.user}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{
                            color: theme.colors.text.primary,
                            fontSize: "14px",
                          }}
                        >
                          {" "}
                          {activity.action}{" "}
                        </Typography>
                        {activity.recipient && (
                          <Typography
                            component="span"
                            sx={{
                              color: "#5559ca",
                              fontWeight: "500",
                              fontSize: "14px",
                            }}
                          >
                            {activity.recipient}
                          </Typography>
                        )}
                        {activity.source && (
                          <Typography
                            component="span"
                            sx={{
                              color: "#5559ca",
                              fontWeight: "500",
                              fontSize: "14px",
                            }}
                          >
                            {activity.source}
                          </Typography>
                        )}
                        {activity.content && (
                          <Typography
                            component="span"
                            sx={{
                              fontWeight: "500",
                              fontSize: "14px",
                              color: theme.colors.text.primary,
                            }}
                          >
                            {" "}
                            "{activity.content}"
                          </Typography>
                        )}
                      </Box>
                    }
                    secondary={
                      <TimeText sx={{ fontSize: "14px" }}>
                        • {activity.time}
                      </TimeText>
                    }
                    disableTypography
                  />
                </ActivityItem>
              ))}
            </Box>
          </Box>
        ))}
      </ScrollableList>
    </Paper>
  );
};

export default RecentActivities;
