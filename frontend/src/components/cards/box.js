import './card.css'
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Boxcontainer({image, description,title}) {
  return (
    <div className='box-container'>
        <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={4}>
                  
                    <img src={image} alt={image} className="box-image"/>
                 
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                  <div className='text-container'>
                      <h5 className='text-h5'>{title}</h5>
                      <p className='text-p'>{description}</p>
                  </div>
                  </Grid>
                </Grid>
              </Box>
    </div>
  )
}

export default Boxcontainer