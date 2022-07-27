import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "75%",
		display: "flex",
		flexDirection: "column",
		margin: "4rem",
	},
	input: {
		width: "100%",
		margin: "0",

		marginTop: "1rem",
		marginBottom: "1rem",
		height: "45px",
		borderRadius: "8px",
		fontSize: "18px",
		fontFamily: "Poppins",
		fontWeight: "normal",
		border: "2px solid #CBDBEA",
		"&:focus": {
			border: "0.5px solid #CBDBEA",
		},
		padding: "8px",
	},
	btn: {
		margin: 0,
		padding: 0,
		width: "100%",
		marginTop: "1rem",
		marginBottom: "1rem",
		backgroundColor: "#329C89",
		color: "white",
		fontFamily: "Poppins",
		fontSize: "16px",
		fontWeight: "700",
		height: "45px",
		border: "none",
		borderRadius: "8px",
		"&:hover": {
			cursor: "pointer",
		},
	},
	text: {
		margin: 0,
		padding: 0,
		fontFamily: "Poppins",
		fontSize: "21px",
		fontWeight: "500",
	},
	subText: {
		margin: 0,
		padding: 0,
		fontFamily: "Poppins",
		fontSize: "11px",
		fontWeight: "300",
	},
	formWrapper: {
		marginTop: "15px",
		alignItems: "center",
	},
}));
const Login = (props) => {
	const { loginHandler } = props;
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className={classes.root}>
			<Typography className={classes.text}>To Continue</Typography>
			<p className={classes.subText}>We need your Name & Email </p>
			<div className={classes.formWrapper}>
				<form>
					<input
						className={classes.input}
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<input
						className={classes.input}
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<button
						className={classes.btn}
						onClick={(e) =>
							loginHandler(e, { email: email, password: password })
						}
					>
						Log In
					</button>
					<input type="checkbox" name="checkbox" />
					<label htmlFor="checkbox">Remember Me</label>
				</form>
			</div>
		</div>
	);
};

export default Login;
