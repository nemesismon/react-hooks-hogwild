import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PigsOnParade from "./PigsOnParade";

function App() {

	const [currentHogs, setCurrentHogs] = useState(hogs);
	const [greasedToggle, setGreasedToggle] = useState("");

	function handleCardClick () {
		
	}

	return (
		<div className="App">
			<Nav />
			<PigsOnParade currentHogs={currentHogs} greasedToggle={greasedToggle} onHandleCardClick={handleCardClick}/>
		</div>
	);
}

export default App;
