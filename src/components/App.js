import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PigsOnParade from "./PigsOnParade";

function App() {

	const [currentHogs, setCurrentHogs] = useState(hogs);
	const [greasedToggle, setGreasedToggle] = useState("");

	const handleGreaseToggle = () => {
		setGreasedToggle(!greasedToggle);
	}

	return (
		<div className="App">
			<Nav onHandleGreaseToggle={handleGreaseToggle}/>
			<PigsOnParade currentHogs={currentHogs} greasedToggle={greasedToggle}/>
		</div>
	);
}

export default App;
