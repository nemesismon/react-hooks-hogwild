import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PigsOnParade from "./PigsOnParade";

function App() {

	const [currentHogs, setCurrentHogs] = useState(hogs);
	const [greasedToggle, setGreasedToggle] = useState("");
	const [hogNameSort, setHogNameSort] = useState(false);
	const [hogWeightSort, setHogWeightSort] = useState(false);
	

	const handleGreaseToggle = () => {
		console.log(greasedToggle);
		setGreasedToggle(!greasedToggle);
	}

	const handleHogNameSort = () => {
		setHogNameSort(!hogNameSort);
	}

	const handleHogWeightSort = () => {
		setHogWeightSort(!hogWeightSort);
	}

	return (
		<div className="App">
			<Nav onHandleGreaseToggle={handleGreaseToggle} onHandleHogNameSort={handleHogNameSort} onHandleHogWeightSort={handleHogWeightSort}/>
			<PigsOnParade currentHogs={currentHogs} greasedToggle={greasedToggle} hogNameSort={hogNameSort} hogWeightSort={hogWeightSort}/>
		</div>
	);
}

export default App;
