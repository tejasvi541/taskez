import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Button, Typography } from "@material-ui/core";

import overviewSvg from "../Assets/buttonIcons/overview.svg";
import calenderSvg from "../Assets/buttonIcons/calender.svg";
import chatSvg from "../Assets/buttonIcons/chat.svg";
import projectsSvg from "../Assets/buttonIcons/projects.svg";
import statsSvg from "../Assets/buttonIcons/stats.svg";
import settingSvg from "../Assets/buttonIcons/setting.svg";
import logooutSvg from "../Assets/buttonIcons/logout.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyItems: "center",
		height: "100%",
		width: "100%",
		alignItems: "flex-start",
		position: "relative",
		border: "0",
		borderRight: "2px solid #F0F0F0",
	},
	text: {
		margin: "25px",
		padding: "25px",
		fontFamily: "Poppins",
		fontSize: "21px",
		fontWeight: "600",
	},
	iconText: {
		margin: "25px",
		fontFamily: "Poppins",
		fontSize: "18px",
		fontWeight: "500",
		color: "#9A9A9A",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	image: {
		marginLeft: "25px",
		width: "25px",
		height: "25px",
		color: "#9A9A9A",
		margin: "0.2rem",
		marginRight: "0.8rem",
	},
	btnWrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		"&:hover": {
			cursor: "pointer",
		},
	},
	footerDiv: {
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
		marginBottom: "3rem",
	},
}));
const Sidebar = () => {
	const classes = useStyles();
	const [isActive, setActive] = useState(false);
	return (
		<Box className={classes.root}>
			<Typography className={classes.text}>.taskez</Typography>
			<div>
				<div className={classes.btnWrapper}>
					<Typography className={classes.iconText}>
						<img src={overviewSvg} className={classes.image} /> Overview
					</Typography>
				</div>
				<div className={classes.btnWrapper}>
					<Typography className={classes.iconText}>
						<img src={statsSvg} className={classes.image} />
						Stats
					</Typography>
				</div>
				<div className={classes.btnWrapper}>
					<Typography className={classes.iconText}>
						<img src={projectsSvg} className={classes.image} /> Projects
					</Typography>
				</div>
				<div className={classes.btnWrapper}>
					<Typography className={classes.iconText}>
						{" "}
						<img src={chatSvg} className={classes.image} />
						Chats
					</Typography>
				</div>

				<div className={classes.btnWrapper}>
					<Typography className={classes.iconText}>
						<img src={calenderSvg} className={classes.image} />
						Calender
					</Typography>
				</div>
			</div>
			<div className={classes.footerDiv}>
				<div className={classes.btnWrapper}>
					<Typography className={classes.iconText}>
						<img src={settingSvg} className={classes.image} /> Settings
					</Typography>
				</div>
				<div className={classes.btnWrapper}>
					<Typography className={classes.iconText}>
						<img src={logooutSvg} className={classes.image} /> Logout
					</Typography>
				</div>
			</div>
		</Box>
	);
};

export default Sidebar;
