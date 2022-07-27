import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Button, Typography } from "@material-ui/core";
import profileImg from "../Assets/profileImage.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "130px",
		marginRight: "1.5rem",
	},
	avatar: {
		width: "32px",
		height: "32px",
		borderRadius: "50%",
	},
	title: {
		fontSize: "17px",
		fontWeight: "400",
		fontFamily: "Poppins",
	},
}));

const UserProfile = (props) => {
	const { name, userAvatar } = props;
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography className={classes.title}>Hi {name || "Guest"}</Typography>
			<img src={profileImg} className={classes.avatar} />
		</div>
	);
};

export default UserProfile;
