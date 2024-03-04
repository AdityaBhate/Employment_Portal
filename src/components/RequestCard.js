import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const card = (
	<React.Fragment>
		<CardContent>
			<Typography variant='body2'>
				Request you to send some labour for construction work by 10th of this
				month. thanks
			</Typography>

			<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
				by client
			</Typography>
		</CardContent>
		<CardActions>
			<Button size='small'>👍</Button>
		</CardActions>
	</React.Fragment>
);

export default function OutlinedCard() {
	return (
		<Box sx={{ minWidth: 275 }}>
			<Card variant='outlined'>{card}</Card>
		</Box>
	);
}
