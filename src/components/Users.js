import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersFromApi } from '../actions/UserActions';

function Users(props) {

    useEffect(() => {
        props.getUsers()
    }, []);

    return (
        <div>{props.users.map(user => <p>{user.name}</p>)}</div>
    )
}


const mapStateToProps = (state) => ({
    users: state.users.users
})

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getUsersFromApi())
})



export default connect(mapStateToProps, mapDispatchToProps)(Users);