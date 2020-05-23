export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
//STRETCH: API Call
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export const addFeature = feature => {
  return {type: ADD_FEATURE, payload: feature};
};

export const removeFeature = feature => {
  return {type: REMOVE_FEATURE, payload: feature};
};

//STRETCH
export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST
  };
}

export const fetchDataSuccess = (response) => {
  return {
    type: FETCH_DATA_SUCCESS,
    response
  };
}

export const fetchDataError = (error) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: { error }
  };
}