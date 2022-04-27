import React, {useState} from "react";
import HogCard from "./HogCard";

function PigsOnParade ({ currentHogs, greasedToggle, hogNameSort, hogWeightSort}) {

    const [hogUpdate, setHogUpdate] = useState(currentHogs);

    const nameSort = () => {
        if (hogNameSort === true) {
        hogUpdate.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })}
        return hogUpdate;
    }

    nameSort();

    const weightSort = () => {
        if (hogWeightSort === true) {
            hogUpdate.sort((a, b) => {
                return a.weight - b.weight;
            });
        }
        return hogUpdate;
    }

    weightSort();

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