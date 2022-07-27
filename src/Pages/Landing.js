import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Button } from "@material-ui/core";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import { LoginUser, RegisterUser } from "../Api/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, register } from "../Actions/auth";

// SVG
import landingImage from "../Assets/landingImage.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100vh",
		display: "flex",
		alignItems: "center",
		justifyItems: "center",
	},
	imageWapper: {
		width: "60%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyItems: "center",
	},
	image: {
		width: "100%",
		height: "60vh",
	},
	card: {
		height: "60vh",
		width: "75%",
		background: "#FFFFFF",
		border: "2px solid rgba(26, 59, 88, 0.24)",
		borderRadius: "65px",
		padding: "1rem",
	},
	formWapper: {
		width: "40%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyItems: "center",
	},
	buttonWrapper: {
		display: "flex",
		justifyItems: "flex-start",
		alignItems: "center",
		flexDirection: "row",
		margin: "1rem",
	},
	button: {
		margin: "0.5rem",
		fontFamily: "Poppins",
		fontStyle: "normal",
		fontSize: "27px",
		border: "0",
		color: "rgba(26, 59, 88, 0.33)",
		backgroundColor: "white",
		"&:hover": {
			cursor: "pointer",
		},
	},
	buttonActive: {
		margin: "0.5rem",
		fontFamily: "Poppins",
		fontStyle: "normal",
		fontSize: "27px",
		border: "0",
		borderBottom: "3px solid #1A3B58",
		color: "#1A3B58",
		backgroundColor: "white",
		"&:hover": {
			cursor: "pointer",
		},
	},
	content: {
		width: "100%",
		// height: "100%",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
	},
}));

const Landing = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isActive, setActive] = useState(0);
	const [error, setError] = useState({ isError: false, msg: "" });

	const loginHandler = async (e, data) => {
		if (data.email.trim() === "") {
			setError({ isError: true, msg: "Type a valid Email" });
			return;
		}
		if (data.password.trim() === "") {
			setError({ isError: true, msg: "Type a valid Password" });
			return;
		}
		e.preventDefault();
		dispatch(login(data, navigate));
		// try {
		// 	const res = await LoginUser(data);
		// 	console.log(res);
		// } catch (err) {
		// 	console.log(err);
		// }
		setError({ isError: false, msg: "" });
	};

	const signUpHandler = async (e, data) => {
		if (data.name.trim() === "") {
			setError({ isError: true, msg: "Type a valid Name" });
			return;
		}
		if (data.email.trim() === "") {
			setError({ isError: true, msg: "Type a valid Email" });
			return;
		}
		if (data.email.trim() === "") {
			setError({ isError: true, msg: "Type a valid Password" });
			return;
		}
		e.preventDefault();
		dispatch(register(data, navigate));
		// try {
		// 	const res = await RegisterUser(data);
		// 	if (res.data) {
		// 		localStorage.setItem("task-token", res.data.token);
		// 	}
		// } catch (err) {
		// 	console.log(err);
		// }
		setError({ isError: false, msg: "" });
	};

	return (
		<Box className={classes.root}>
			<div className={classes.imageWapper}>
				<img src={landingImage} className={classes.image} />
			</div>
			<div className={classes.formWapper}>
				<Card className={classes.card}>
					<div className={classes.buttonWrapper}>
						<button
							className={`${
								isActive === 0 ? classes.buttonActive : classes.button
							}`}
							onClick={() => setActive(0)}
						>
							Log In!
						</button>
						<button
							className={`${
								isActive === 1 ? classes.buttonActive : classes.button
							}`}
							onClick={() => setActive(1)}
						>
							Sign Up!
						</button>
					</div>
					<div className={classes.content}>
						{isActive === 0 ? (
							<>
								<Login
									error={error}
									setError={setError}
									loginHandler={loginHandler}
								/>
							</>
						) : (
							<Signup
								error={error}
								setError={setError}
								signUpHandler={signUpHandler}
							/>
						)}
					</div>
				</Card>
			</div>
		</Box>
	);
};

export default Landing;
