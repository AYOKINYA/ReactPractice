const posts = (state = [], action) => {
    switch (action.type) {
        case "GET_POSTS_SUCCESS":
            return [...state, ...action.posts];
        case "GET_POSTS_FAIL":
            return [...state, action.error];
        default:
            return state;
    }
};

export default posts;