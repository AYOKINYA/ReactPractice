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