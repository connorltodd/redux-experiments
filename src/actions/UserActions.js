import axios from 'axios';

export const getUsersFromApi = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => dispatch({ type: "GET USERS", payload: res.data }))
    }
}