const initialState = {
    users: [],
    firstName: "john"
}

const UsersReducer = (state = initialState, action) => {
    console.log("USERS ACTION CALLED: ", action)
    switch (action.type) {
        case "GET USERS":
            return { ...state, users: action.payload };
        default:
            return state;
    }
}

export default UsersReducer;
