import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Button, Typography } from "@material-ui/core";

import Sidebar from "../Components/Sidebar";
import Projects from "../Components/Projects";
import TopBar from "../Components/Topbar";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100vh",
		display: "flex",
		flexDirection: "row",
	},
	text: {
		margin: 0,
		padding: 0,
		fontFamily: "Poppins",
		fontSize: "21px",
		fontWeight: "500",
	},
	section1: {
		width: "350px",
		height: "100%",
	},
	section2: {
		width: "calc(100% - 350px)",
		height: "100%",
	},
}));

const Dashboard = () => {
	const classes = useStyles();

	const addHandler = (e, type) => {
		console.log(type);
	};

	return (
		<div className={classes.root}>
			<div className={classes.section1}>
				<Sidebar />
			</div>
			<div className={classes.section2}>
				<TopBar />
				<Projects
					toDo={[]}
					inProgress={[]}
					completed={[]}
					addHandler={addHandler}
				/>
			</div>
		</div>
	);
};

export default Dashboard;
