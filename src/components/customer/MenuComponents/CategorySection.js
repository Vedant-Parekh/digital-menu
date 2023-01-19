import * as React from 'react';
import Box from '@mui/material/Box';
import CategoryIcon from '@mui/icons-material/Category';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import FoodCard from './FoodCard';
import { BorderAllRounded } from '@mui/icons-material';

export default function CategorySection(props) {
    return (
        <Paper elevation={1} sx={{ m: 0.5, width: '99%', minHeight: '100%', overflow: 'auto', borderRadius: 5 }}>
            <Grid container component="main" sx={{ height: '10vh' }}>
                <Grid
                    item
                    sm={12}
                    md={12}
                    xs={12}
                    sx={{
                        minWidth: 400,
                        backgroundImage: 'url(' + props.category.image + ')',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Box
                        sx={{
                            mt: '6vh',
                            height: '4vh',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Typography component="h1" variant="h4" color="white" style={{fontWeight: 'bold'}}>
                            {props.category.name}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {props.category.foodItems.map((food) => (
                    <FoodCard food={food} />
                ))}
            </Box>
        </Paper>
    );
}
