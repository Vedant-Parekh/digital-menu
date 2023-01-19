import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { width } from '@mui/system';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function OfferCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (!open)
      setOpen(true);
  }
  const handleClose = () => {
    if (open)
      setOpen(false);
  }
  return (
    <>
      <Box sx={{ minWidth: 200, maxWidth: 200, m: 0.5 }}>
        <Card variant="outlined" onClick={handleOpen}>
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
                  sx={{ mt: 0.5, fontWeight: 'bold' }}
                >
                  {props.offer.shortDescription}
                </Typography>
                <Typography color="text.secondary">
                  {props.offer.coupon}
                </Typography>
              </Grid>
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
            </Box>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography id="transition-modal-title" variant="h6" component="h2">
                    Text in a modal
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
                </Box>
              </Fade>
            </Modal>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}