import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ onHandleGreaseToggle, greasedToggle, onHandleHogNameSort, onHandleHogWeightSort }) => {

	console.log(greasedToggle);

	const greasedToggleButton = () => {
		if (greasedToggle === undefined) {
			return "Grease Toggle";
		} else if (greasedToggle === true) {
			return "Greased Hogs";
		} else if (greasedToggle === false) {
			return "Ungreased Hogs";
		}
	}

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<ul></ul>
			<button onClick={onHandleGreaseToggle}>{greasedToggleButton()}</button>
			<button onClick={onHandleHogNameSort}>Sort By Name</button>
			<button onClick={onHandleHogWeightSort}>Sort By Weight</button>
		</div>
	);
};

export default Nav;
