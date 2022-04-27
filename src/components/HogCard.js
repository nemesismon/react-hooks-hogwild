import React, {useState} from "react"

function HogCard ({ hog }) {

const [hogSelected, setHogSelected] = useState(false);

    hog.select = hogSelected;

    function handleHogSelected () {
        console.log(hog);
        setHogSelected(!hogSelected);
    }

    const showSelectedHogDetails = () => {
        if (hog.select === true) {        
            return (
                <div className="details">
                    <ul>Specialty: {hog.specialty}</ul>
                    <ul>Weight: {hog.weight}</ul>
                    <ul>Greased: {hog.greased}</ul>
                    <ul>Highest Medal Achieved: {hog["highest medal achieved"]}</ul>
                </div>
            )
        } else {
            return null;
        }
    }

    return (
    <div className="ui card eight wide column pigTile">
        <div onClick={handleHogSelected}>  
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name}/>
            {showSelectedHogDetails()}
        </div>  
    </div>
    )
}

export default HogCard;