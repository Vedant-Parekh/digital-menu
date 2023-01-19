import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { width } from '@mui/system';

import FadeModalDialog from './OfferDetails';

export default function OfferCard(props) {
  return (
    <>
    <Box sx={{ minWidth: 200, maxWidth: 200, m: 0.5 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Grid
              container component="main"
              spacing={0}
              align="center"
              justify="center"
            >
              <Grid item xs={4} sm={4} md={4} sx={{ pr: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <img src={props.offer.image} alt="offer" width="100%" />
                </div>
              </Grid>
              <Grid item xs={8} sm={8} md={8}>
                <Typography 
                  variant="h9"
                  component="div"
                  sx={{ mt: 1.5, fontWeight: 'bold' }}
                  >
                  {props.offer.shortDescription}
                </Typography>
                <Typography color="text.secondary">
                  {props.offer.coupon}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            {/* <Button sx={{m: 0.2 }}size="small">Details</Button> */}
            <FadeModalDialog offer={props.offer} />
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
    </>
  );
}