import { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allTransections } from '../actions/transactionAction'
import { newTransections } from '../actions/transactionAction';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import moment from 'moment';
import '../App.css'

const TransactionForm = () => {
  
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector(state => state.allTransections)

    const handleSubmit = (event) => {
      event.preventDefault();
      const Transections = new FormData(event.currentTarget);
     
        const productName = Transections.get('productName')
        const amount = Transections.get('amount')

      dispatch(newTransections(productName , amount))
      dispatch(allTransections())
      
    };
    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                Form
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="productName"
                  label="productName"
                  name="productName"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="amount"
                  label="amount"
                  type="number"
                  id="amount"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  add
                </Button>
                {/* {!loading ? data?.productName :"ddddd"} */}
                {data && data.length> 0 && 
                  data.reverse().map((item, i) => {
                  const dateTimeAgo = moment(new Date(item.createdAt)).fromNow();
                  return [
                    <Paper>
                     <div className='formDisplay'key={i}>
                        <div className='display'>{item.productName}</div>
                        <div className='display3'>
                          <div className='display1'>{item.amount}</div>
                          <div className='display2'>{dateTimeAgo}</div>
                        </div>
                        
                      </div>
                      </Paper >
                  ]
                })}
                
          
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
};

export default TransactionForm;










const theme = createTheme();

