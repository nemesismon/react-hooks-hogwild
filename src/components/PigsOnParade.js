import React from "react";

function PigsOnParade ({ currentHogs, greasedToggle}) {

    console.log(currentHogs);

    const greasedHog = currentHogs.filter(hog => hog.greased === greasedToggle || greasedToggle === "") //What to do when I want all?

    function selectedHog (event) { //created object passed the information from hogRender
        console.log(event)
    }

    const hogRender = greasedHog.map((hog) => {
        return (
            <div className="pigTile" onClick={selectedHog}>
                <div key={hog.name} name={hog.name} >
                    <h3>{hog.name}</h3>
                    <ul></ul>
                    <img src={hog.image} alt={hog.name}/>
                </div>
            </div>
        )
    })

    return (
    <div className="ui grid container">
        <div className="ui eight wide colum">
            {hogRender}
        </div>
    </div>
    )
}

export default PigsOnParade;