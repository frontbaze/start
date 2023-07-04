import React, { useState } from "react";
import classes from "./counter.module.scss";

const Counter = () => {
	const [count, setCount] = useState(0);
	const handleCount = () => {
		setCount(count + 1);
	};
	return (
		<>
			<h1>{count}</h1>
			<button className={classes.btn} onClick={handleCount}>
				+
			</button>
		</>
	);
};

export default Counter;
