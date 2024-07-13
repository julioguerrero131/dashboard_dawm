import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import sunrise from '../assets/sunrise.jpeg'
import { useEffect, useState } from 'react';

export default function Summary() {

  const [dateInfo, setDateInfo] = useState({ date: '', time: '', wish: '' });

  useEffect(() => {
    const locale = 'en';
    const updateDate = () => {
      const today = new Date();

      const day = today.toLocaleDateString(locale, { weekday: 'long' });
      const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

      const hour = today.getHours();
      const wish = `${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}`;

      const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });

      setDateInfo({ date, time, wish });
    };

    updateDate();

    const timer = setInterval(updateDate, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={sunrise}
          alt="Amanecer"
        />
        <CardContent>
          <Typography gutterBottom component="h2" variant="h6" color="primary">
            {dateInfo.wish}
          </Typography>
          <Typography component="p" variant="h4">
            {dateInfo.time}
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {dateInfo.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}