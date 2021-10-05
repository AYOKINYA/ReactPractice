import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../actions/post';


const Posts = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    return (
            <div> {posts && posts.map((post) => {
                return (
                    <li key={post.id}>
                        title : {post.title}
                    </li>
                )
            })
                }
            </div>
    );

}

// UseEffect -> dispatch({ type: "GET_POSTS" }); -> rootSaga -> takeEvery -> getPosts
//  -> put action -> dispatch action -> reducer -> update state

 export default Posts;