import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Button, Typography } from "@material-ui/core";
import CommentIcon from "../Assets/buttonIcons/comment.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		marginTop: "1rem",
		marginBottom: "1rem",
		backgroundColor: "#FFFFFF",
		borderRadius: "25px",
		padding: "1rem",
	},
	title: {
		margin: 0,
		padding: 0,
		marginTop: "0.5rem",
		marginBottom: "0.5rem",
		color: "#212121",
		fontSize: "14px",
		fontFamily: "Poppins",
	},
	desc: {
		margin: 0,
		padding: 0,
		marginTop: "0.5rem",
		marginBottom: "0.5rem",
		fontSize: "12px",
		fontFamily: "Poppins",
		fontWeight: "400",
		color: "#6B6B6B",
	},
	flexBox: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alingItems: "center",
	},
	avatar: {
		width: "26px",
		height: "26px",
		borderRadius: "50%",
	},
	commentIcon: {
		width: "11px",
		height: "11px",
		marginLeft: "0.5rem",
	},
}));

const TaskCard = (props) => {
	const { title, desc } = props;
	const classes = useStyles();

	return (
		<div>
			<Typography className={classes.title}>{title}</Typography>
			<p className={classes.desc}>{desc}</p>
			<div className="flexBox">
				<img src={CommentIcon} className={classes.avatar} />
				<Typography>
					1 <img src={CommentIcon} className={classes.commentIcon} />
				</Typography>
			</div>
		</div>
	);
};

export default TaskCard;
