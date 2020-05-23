import axios from 'axios';
import {fetchDataRequest,fetchDataSuccess,fetchDataError} from '../actions/carAction';

//STRETCH: Fetch API Data and add to App
export default function ApiFetch() {
    //AFTER: Refactored to do API call the redux way
    // will require changing Action later
    return dispatch => {
        dispatch(fetchDataRequest());
        axios
          .get(
            "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json"
          )
          .then(response => {
            dispatch(fetchDataSuccess(response.data.Results));
          })
          .catch(error => {
            dispatch(fetchDataError(error));
          });
      };
    
    //BEFORE: Non-Redux axios call
    //const [apiState, setApiState] = useState([]);

    //get Honda's first
    // useEffect(() => {
    //     axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json')
    //     .then(response => {
    //         setApiState(response.data.Results);
    //     })
    // }, [])

    //fetch and display first 20 Hondas
    // return (
    //     <div>
    //         {console.log(apiState)}
    //         {apiState.map((car,index) => {
    //             if (index<20){
    //                 return <p>{car.Model_Name}</p>
    //             }
    //         }

    //         )}
    //     </div>
    // )
}