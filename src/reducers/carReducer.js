const initialState = {
    
}

export const reducer = (state,action) => {
    switch (action) {
        case "Test":
           return "Hello, World!";
        default:
            return state;
    }
}