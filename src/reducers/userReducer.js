const currentUser = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, user: action.user, login: true};
        case "LOGOUT":
            return {...state, user: "", login: false};
        default:
            return state;
    }
};

export default currentUser;