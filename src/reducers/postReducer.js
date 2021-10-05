const posts = (state = [], action) => {
    switch (action.type) {
        case "GET_POSTS_SUCCESS":
            return [...state, ...action.posts];
        case "GET_POSTS_FAIL":
            return [...state, action.error];
        case "ADD_POST_SUCCESS":
            return [...state, action.newPost]
        case "ADD_POST_FAIL":
            return [...state, action.error]
        case "EDIT_POST_SUCCESS":
            return state.map((el) => el.id === action.id ? action.editedPost : el);
        case "EDIT_POST_FAIL":
            return [...state, action.error]
        case "DELETE_POST_SUCCESS":
            return state.filter(post => post.id !== action.id)
        case "DELETE_POST_FAIL":
            return [...state, action.error]    
        default:
            return state;
    }
};

export default posts;