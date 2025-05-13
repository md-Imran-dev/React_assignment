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
  Button
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
  const [view, setView] = useState('message');
  const groupedActivities = groupByDate(activities);

  return (
    <Paper elevation={0} sx={{ borderRadius: 1, overflow: 'hidden', height: '100%' }}>
      <HeaderContainer>
        <Typography variant="h6" fontWeight="medium">
          Recent Activities
        </Typography>
        
        <Box>
          <Button 
            color={view === 'message' ? 'primary' : 'inherit'}
            onClick={() => setView('message')}
            sx={{ fontWeight: view === 'message' ? 'bold' : 'normal', minWidth: 'auto' }}
          >
            Message
          </Button>
          <Button 
            color={view === 'email' ? 'primary' : 'inherit'}
            onClick={() => setView('email')}
            sx={{ fontWeight: view === 'email' ? 'bold' : 'normal', minWidth: 'auto' }}
          >
            Email
          </Button>
        </Box>
      </HeaderContainer>
      
      <List sx={{ p: 0, maxHeight: 400, overflow: 'auto' }}>
        {Object.keys(groupedActivities).map((date) => (
          <Box key={date}>
            <DateLabel>{date}</DateLabel>
            
            {groupedActivities[date].map((activity) => (
              <ActivityItem key={activity.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: activity.color, width: 36, height: 36 }}>
                    {activity.type === 'message' ? 
                      <span className="material-icons-outlined" style={{ fontSize: '20px' }}>chat</span> : 
                    activity.type === 'reply' ? 
                      <span className="material-icons-outlined" style={{ fontSize: '20px' }}>forum</span> : 
                      <span className="material-icons-outlined" style={{ fontSize: '20px' }}>shopping_cart</span>
                    }
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