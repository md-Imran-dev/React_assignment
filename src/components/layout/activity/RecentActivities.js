import React, { useState } from 'react';
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
  Tab
} from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1.5, 2),
  borderBottom: '1px solid #eee',
}));

const ActivityItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1, 2),
}));

const DateLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  padding: theme.spacing(1.5, 2, 0.5),
}));

const TimeText = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  color: 'text.secondary',
  marginTop: '4px',
}));

const StyledTab = styled(Tab)({
  textTransform: 'none',
  minWidth: 80,
  fontWeight: 'medium',
  padding: '10px 16px',
  color: 'inherit',
  '&.Mui-selected': {
    color: '#6B46C1',
    fontWeight: 'bold',
  },
});

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const activities = [
  {
    id: 1,
    type: 'message',
    user: 'Christian Wood',
    action: 'Sent Message to',
    recipient: 'Nikita Houston',
    time: '1 min ago',
    date: 'TODAY',
    color: '#ff9800'
  },
  {
    id: 2,
    type: 'reply',
    user: 'Nikita Houston',
    action: 'Reply your message',
    content: 'Hello',
    time: '1 min ago',
    date: 'TODAY',
    color: '#2196f3'
  },
  {
    id: 3,
    type: 'order',
    user: 'Christian Wood',
    action: 'Accept Order from',
    source: 'Ebay',
    time: '1 min ago',
    date: 'TODAY',
    color: '#f44336'
  },
  {
    id: 4,
    type: 'reply',
    user: 'Rohan Walker',
    action: 'Reply your message',
    source: 'Ebay',
    time: '1 min ago',
    date: 'TODAY',
    color: '#2196f3'
  },
  {
    id: 5,
    type: 'reply',
    user: 'Rohan Walker',
    action: 'Reply your message',
    source: 'Ebay',
    time: '1 min ago',
    date: 'TODAY',
    color: '#2196f3'
  },
  {
    id: 6,
    type: 'order',
    user: 'Christian Wood',
    action: 'Accept Order from',
    source: 'Amazon',
    time: '12:30PM',
    date: 'YESTERDAY',
    color: '#f44336'
  }
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
  const [view, setView] = useState(0);
  const groupedActivities = groupByDate(activities);

  const handleChange = (event, newValue) => {
    setView(newValue);
  };

  return (
    <Paper elevation={0} sx={{ borderRadius: 1, overflow: 'hidden', height: '100%' }}>
      <HeaderContainer>
        <Typography variant="h6" fontWeight="medium">
          Recent Activities
        </Typography>
        
        <StyledTabs value={view} onChange={handleChange}>
          <StyledTab label="MESSAGE" />
          <StyledTab label="EMAIL" />
        </StyledTabs>
      </HeaderContainer>
      
      <List sx={{ p: 0, maxHeight: 400, overflow: 'auto' }}>
        {Object.keys(groupedActivities).map((date) => (
          <Box key={date}>
            <DateLabel>{date}</DateLabel>
            
            {groupedActivities[date].map((activity) => (
              <ActivityItem key={activity.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: activity.color, width: 36, height: 36, fontSize: '1rem' }}>
                    {activity.type === 'message' ? 'chat' : 
                     activity.type === 'reply' ? 'forum' : 'shopping_cart'}
                  </Avatar>
                </ListItemAvatar>
                
                <ListItemText
                  primary={
                    <Box component="span">
                      <Typography component="span" sx={{ color: '#1976d2', fontWeight: 'medium' }}>
                        {activity.user}
                      </Typography>
                      <Typography component="span" color="text.primary">
                        {' '}{activity.action}{' '}
                      </Typography>
                      {activity.recipient && (
                        <Typography component="span" sx={{ color: '#1976d2', fontWeight: 'medium' }}>
                          {activity.recipient}
                        </Typography>
                      )}
                      {activity.source && (
                        <Typography component="span" sx={{ color: '#1976d2', fontWeight: 'medium' }}>
                          {activity.source}
                        </Typography>
                      )}
                      {activity.content && (
                        <Typography component="span" sx={{ fontWeight: 'medium' }}>
                          {' '}"<Typography component="span" sx={{ color: '#1976d2' }}>{activity.content}</Typography>"
                        </Typography>
                      )}
                    </Box>
                  }
                  secondary={
                    <TimeText>
                      • {activity.time}
                    </TimeText>
                  }
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