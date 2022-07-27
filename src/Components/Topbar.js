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

const Topbar = (props) => {
	const { userData } = props;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Searchbar />
			<UserProfile name={userData?.name?.split(" ")[0]} />
		</div>
	);
};

export default Topbar;
