import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Button, Typography } from "@material-ui/core";

import Sidebar from "../Components/Sidebar";
import Projects from "../Components/Projects";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "grid",
		gridTemplateColumns: "0.75fr 3.25fr",
	},
	text: {
		margin: 0,
		padding: 0,
		fontFamily: "Poppins",
		fontSize: "21px",
		fontWeight: "500",
	},
}));

const Dashboard = () => {
	const classes = useStyles();

	const addHandler = (e, type) => {
		console.log(type);
	};

	return (
		<div className={classes.root}>
			<Sidebar />
			<Projects
				toDo={[]}
				inProgress={[]}
				completed={[]}
				addHandler={addHandler}
			/>
		</div>
	);
};

export default Dashboard;
