import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Button, Typography } from "@material-ui/core";
import TaskCard from "./TaskCard.js";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "30%",
		height: "75vh",
		margin: "1.5rem",
		padding: "0.8rem",
		borderRadius: " 15px",
		backgroundColor: "#F5F9F9",
	},
	topSection: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
	},
	title: {
		fontSize: "14px",
		fontFamily: "Poppins",
		fontWeight: "500",
	},
	count: {
		fontSize: "14px",
		fontFamily: "Poppins",
		fontWeight: "500",
		backgroundColor: "#ECF3F3",
		color: "#329C89",
		fontWeight: "600",
		padding: "0.5rem",
	},
	addbtn: {
		marginTop: "1.5rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		border: "none",
		backgroundColor: "#ECF3F3",
		color: "#329C89",
		fontSize: "14px",
		fontFamily: "Poppins",
		fontWeight: "500",
		height: "38px",
	},
	content: { display: "flex", flexDirection: "columns", marginTop: "1.5rem" },
}));

const ColumnView = (props) => {
	const { title, items, addHandler } = props;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.topSection}>
				<Typography className={classes.title}>{title}</Typography>
				<Typography className={classes.count}>{items?.length || 0}</Typography>
			</div>
			<Button className={classes.addbtn} onClick={(e) => addHandler(e, title)}>
				+
			</Button>
			<div className={classes.content}>
				{items && items.map((item, i) => <TaskCard />)}
			</div>
		</div>
	);
};

export default ColumnView;
