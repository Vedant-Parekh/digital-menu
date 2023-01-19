import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Grid from '@mui/material/Grid';

export default function FoodCard(props) {
    const theme = useTheme();

    return (
        <Card variant="outlined" sx={{ display: 'flex', mt: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Grid container component="main">
                        <Grid item sm={12} md={12} xs={12}>
                            <Typography component="div" variant="h6">
                                {props.food.name}
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={12} xs={12}>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {props.food.cost}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </Box> */}
            </Box>
        </Card >
    );
}