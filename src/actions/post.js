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

export const addPost = (newPost) => ({
    type: "ADD_POST",
    newPost,
})
export const addPostSuccess = (newPost) => ({
    type: "ADD_POST_SUCCESS",
    newPost,
})
export const addPostFail = (error) => ({
    type: "ADD_POST_FAIL",
    error,
})

export const editPost = (id, editedPost) => ({
    type: "EDIT_POST",
    id,
    editedPost,
})
export const editPostSuccess = (id, editedPost) => ({
    type: "EDIT_POST_SUCCESS",
    id,
    editedPost,
})
export const editPostFail = (error) => ({
    type: "EDIT_POST_FAIL",
    error,
})

export const deletePost = (id) => ({
    type: "DELETE_POST",
    id,
})
export const deletePostSuccess = (id) => ({
    type: "DELETE_POST_SUCCESS",
    id,
})
export const deletePostFail = (error) => ({
    type: "DELETE_POST_FAIL",
    error,
})