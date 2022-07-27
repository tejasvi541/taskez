import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Button, Typography } from "@material-ui/core";
import Searchbar from "./Searchbar";
import UserProfile from "./UserProfile";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "130px",
		width: "100%",
	},
}));

const Topbar = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Searchbar />
			<UserProfile />
		</div>
	);
};

export default Topbar;
