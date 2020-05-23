import {ApiFetch} from './ApiFetch';

const ApiCard = props => {
    return (
            <div>
                {props.response.data.Results.map((car,index) => {
                    if (index<20){
                        return <p>{car.Model_Name}</p>
                    }
                }
    
                )}
            </div>
        )
}