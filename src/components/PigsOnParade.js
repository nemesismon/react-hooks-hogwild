import React, {useState} from "react";
import HogCard from "./HogCard";

function PigsOnParade ({ currentHogs, greasedToggle}) {

    const [hogUpdate, setHogUpdate] = useState(currentHogs);

    const greaseFilter = hogUpdate.filter(hog => greasedToggle === "" || greasedToggle === hog.greased);

    

    const hogRender = greaseFilter.map((hog) => {
        return (
            <HogCard hog={hog} key={hog.name} name={hog.name} />
        )
    })

    return (
    <div className="ui grid container">
            {hogRender}
    </div>
    )
}

export default PigsOnParade;