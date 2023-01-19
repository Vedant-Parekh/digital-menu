import { useState, useEffect } from "react";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import OfferCard from "./MenuComponents/OfferCard";
import offerDataArray from "../../Data/offers";
import DiscountIcon from '@mui/icons-material/Discount';

import categoryArray from "../../Data/food";
import CategorySection from "./MenuComponents/CategorySection";

const Menu = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Item 1, Item 2, Item 3");
  }, []);

  return <Grid container component="main" sx={{ height: '100vh' }}>
    <CssBaseline />
    <Grid
      item
      xs={false}
      sm={false}
      md={4}
      sx={{
        maxWidth: '100%',
      }}
    />
    <Grid item xs={12} sm={12} md={8}>
      <Box
        sx={{
          my: 1,
          mx: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '100%',
          backgroundColor: 'rgba(150, 220, 255, 0.5)',
          borderRadius: '5px',
        }}
      >
        <Paper elevation={1} sx={{ p: 1, m: 1, width: '99%', height: '100%', overflow: 'auto' , borderRadius: 5}}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <DiscountIcon sx={{m:0.5}}/>
            <Typography component="h1" variant="h5">
              Offers
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            {offerDataArray.map((offer) => (
              <OfferCard offer={offer} />
            ))}
          </Box>
        </Paper>
        {categoryArray.map((category) => (
          <CategorySection category={category}/>
        ))}
      </Box>
    </Grid>
  </Grid>
};

export default Menu;