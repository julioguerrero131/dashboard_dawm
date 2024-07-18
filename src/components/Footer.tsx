import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import '../styles/fonts.css'

const Footer: React.FC = () => {
  return (
    <Box id="footer" sx={{ backgroundColor: '#212121', color: '#eee', py: 4 }}>

          <Typography 
          variant="body2" 
          sx={{ 
            fontFamily: 'Titillium Web, sans-serif', 
            fontSize: '1.1rem',
            '&:hover': { color: '#fece00' },
            transition: 'all 300ms'
          }}
          >
            Guayaquil ForeCast© {new Date().getFullYear()} Julio Guerrero. Todos los derechos reservados.
          </Typography>

    </Box>
  );
};

export default Footer;