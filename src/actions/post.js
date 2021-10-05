export const getPosts = () => {
    return{
        type: "GET_POSTS"
    };
};

export const getPostsSuccess = (posts) => {
    return{
        type: "GET_POSTS_SUCCESS",
        posts: posts
    };
};

export const getPostsFail = (error) => {
    return{
        type: "GET_POSTS_FAIL",
        error
    };
};

export const addPost = (newTodo) => ({
    type: "ADD_POST",
    newTodo,
})
export const addPostSuccess = (newTodo) => ({
    type: "ADD_POST_SUCCESS",
    newTodo,
})
export const addPostFail = (error) => ({
    type: "ADD_POST_FAIL",
    error,
})