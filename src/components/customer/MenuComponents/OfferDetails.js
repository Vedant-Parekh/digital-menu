import * as React from 'react';
import { Transition } from 'react-transition-group';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import { List, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';

export default function FadeModalDialog(props) {
	const [open, setOpen] = React.useState(false);
	return (
		<React.Fragment>
			<Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
				Details
			</Button>
			<Transition in={open} timeout={400}>
				{(state) => (
					<Modal
						keepMounted
						open={!['exited', 'exiting'].includes(state)}
						onClose={() => setOpen(false)}
						slotProps={{
							backdrop: {
								sx: {
									opacity: 0,
									backdropFilter: 'none',
									transition: `opacity 400ms, backdrop-filter 400ms`,
									...{
										entering: { opacity: 1, backdropFilter: 'blur(8px)' },
										entered: { opacity: 1, backdropFilter: 'blur(8px)' },
									}[state],
								},
							},
						}}
						sx={{
							visibility: state === 'exited' ? 'hidden' : 'visible',
						}}
					>
						<ModalDialog
							sx={{
								opacity: 0,
								transition: `opacity 300ms`,
								...{
									entering: { opacity: 1 },
									entered: { opacity: 1 },
								}[state],
							}}
						>
							<Typography
								component="h2"
								level="inherit"
								fontSize="1.25em"
								mb="0.25em"
							>
								Offer Details
							</Typography>
							<Typography
								textColor="text.secondary"
								fontSize="0.875em"
								mb="0.5em"
							>
								{props.offer.coupon}
							</Typography>
							<Divider />
							<br/>
							<Typography
								textColor="text.tertiary"
							>
								{props.offer.description}
							</Typography>
							<br/>
							Terms and Conditions:
							<br/>
							<ol style={{ listStyle: 'list-disc' }}>
								{props.offer.TnC.map((cond) => (
									<li>primary={cond} </li>
								))}
							</ol>
						</ModalDialog>
					</Modal>
				)}
			</Transition>
		</React.Fragment>
	);
}