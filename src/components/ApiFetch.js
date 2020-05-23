import React, {useState, useEffect} from 'react';
import axios from 'axios';

//STRETCH: Fetch API Data and add to App
const ApiFetch = ()=> {
    const [apiState, setApiState] = useState([]);

    //get Honda's first
    useEffect(() => {
        axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json')
        .then(response => {
            setApiState(response.data.Results);
        })
    }, [])

    //fetch and display first 20 Hondas
    return (
        <div>
            {console.log(apiState)}
            {apiState.map((car,index) => {
                if (index<20){
                    return <p>{car.Model_Name}</p>
                }
            }

            )}
        </div>
    )
}

export default ApiFetch;