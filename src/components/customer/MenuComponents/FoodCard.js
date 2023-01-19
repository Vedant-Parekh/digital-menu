import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function FoodCard(props) {
    const theme = useTheme();

    return (
        <Card variant="outlined" sx={{ mt: 1, pb: 2 }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Stack direction="row" spacing={1} justifyContent='space-between'>
                    <Box align='left'>
                        <Typography variant="h6">
                            {props.food.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" >
                            {props.food.cost}
                        </Typography>
                    </Box>
                    <Stack direction="row" justifyContent={"flex-end"} spacing={1}>
                        <Box
                            style={{ display: 'flex',direction: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }}
                        >
                            <div style={{
                                backgroundImage: 'url(' + props.food.image + ')',
                                width: 120,
                                height: 100,
                                borderRadius: 10,
                            }}>
                                <Button variant='contained' sx={{ mt: '90px', ml: '28px' }}>
                                    Add
                                </Button>
                            </div>
                        </Box>
                    </Stack>
                </Stack>
            </CardContent>
        </Card >
    );
}