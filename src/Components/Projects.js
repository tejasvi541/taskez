import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Button, Typography } from "@material-ui/core";
import ColumnView from "./ColumnView";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
	},
	heading: {
		fontSize: "24px",
		fontWeight: "500",
		fontFamily: "Poppins",
		margin: "1.5rem",
	},
}));

const Projects = (props) => {
	const { toDo, inProgress, completed, addHandler } = props;
	const classes = useStyles();
	return (
		<div>
			<Typography className={classes.heading}>Projects</Typography>
			<div className={classes.root}>
				<ColumnView addHandler={addHandler} items={[]} title="To Do" />
				<ColumnView addHandler={addHandler} items={[]} title="In Progress" />
				<ColumnView addHandler={addHandler} items={[]} title="Completed" />
			</div>
		</div>
	);
};

export default Projects;
