import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Projects from "../Components/Projects";
import TopBar from "../Components/Topbar";
import { logout } from "../Actions/auth";

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
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let { isLogin, userData } = useSelector((state) => state.userReducer);

	const addHandler = (e, type) => {
		console.log(type);
	};

	const LogoutHandler = () => {
		dispatch(logout(navigate));
	};

	return (
		<div className={classes.root}>
			<div className={classes.section1}>
				<Sidebar LogoutHandler={LogoutHandler} />
			</div>
			<div className={classes.section2}>
				<TopBar userData={userData} />
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
