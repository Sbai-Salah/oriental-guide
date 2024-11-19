import React from 'react';
import { Box, Typography, Divider, Stack, Paper } from '@mui/material';
// import { motion } from 'framer-motion';

const HistoryTimeline = ({ history, cityName }) => {
  return (
    <div className="max-w-6xl mx-auto p-8" >
    <h1 className="text-3xl font-bold text-center mb-16">{`Historique de la ville ${cityName}`}</h1>
    
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-300" />
      
      <div className="space-y-12 relative">
        {history.map((item, index) => (
          <div key={item.year} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center 
            ${item.position === 'bottom' ? 'md:flex-row-reverse' : ''}`}>
            <div className={`w-full md:w-1/2 ${item.position === 'bottom' ? 'md:text-right' : ''}`}>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-2xl font-bold">0{index + 1 }</span>
                <span className="text-gray-600">{item.year}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
              <p className="text-gray-600">{item.details}</p>
            </div>
            
            {/* Center dot */}
            <div className="relative flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                <div className={`w-8 h-8 rounded-full ${item.color} shadow-lg`}>
                    <Typography variant="h5">{item.icon}</Typography>
                </div>
            </div>
            
            <div className="w-full md:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  </div>
    // <Box 
    // maxWidth="600px" 
    // margin="0 auto" 
    // padding="16px"  
    // sx={{
    //     // Define the keyframes for the floating effect
    //     '@keyframes floating': {
    //       '0%': {
    //         transform: 'translateY(0)',
    //       },
    //       '50%': {
    //         transform: 'translateY(-10px)',
    //       },
    //       '100%': {
    //         transform: 'translateY(0)',
    //       },
    //     },
    //   }}>
    //   {history.map((event, index) => (
    //     <Stack
    //       key={index}
    //       direction="row"
    //       spacing={2}
    //       alignItems="center"
    //       sx={{ mb: 2, position: 'relative' }}
    //       component={motion.div}
    //       initial={{ opacity: 0, translateY: 20 }}
    //       animate={{ opacity: 1, translateY: 0 }}
    //       transition={{ duration: 0.5, delay: index * 0.2 }}
    //     >
    //       <Box
    //         sx={{
    //           color: 'primary.main',
    //           display: 'flex',
    //           alignItems: 'center',
    //           justifyContent: 'center',
    //           width: 40,
    //           height: 40,
    //           borderRadius: '50%',
    //           backgroundColor: '#f0f0f0',
    //           animation: 'floating 3s ease-in-out infinite',
    //         }}
    //       >
    //         <Typography variant="h5">{event.icon}</Typography>
    //       </Box>
    //       <Paper elevation={2} sx={{ padding: '8px 16px', flex: 1 }}>
    //         <Typography variant="h6" color="primary">
    //           {event.year}
    //         </Typography>
    //         <Typography variant="body2" color="text.secondary">
    //           {event.event}
    //         </Typography>
    //       </Paper>
    //     </Stack>
    //   ))}
    // </Box>
  );
};


export default HistoryTimeline;
