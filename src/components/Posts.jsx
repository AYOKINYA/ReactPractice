import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts, addPost, deletePost, editPost } from '../actions/post';


const Posts = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return (
            <div> 
                {posts && posts.map((post) => {
                return (
                    <li key={post.id}>
                        title : {post.title}
                        <button
                            onClick={() => {
                                dispatch(deletePost(post.id));
                            }}
                        >
                            Delete Item
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(editPost(post.id, { title: "No Title", body: "No Body", userId: 123 }));
                            }}
                        >
                            Encrypt Item
                        </button>
                    </li>
                )
            })
                }

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='title'
                />
                <input
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder='body'
                />
                <button
                        onClick={() => {
                        dispatch(addPost({ title, body, userId: 123 }));
                        }}
                    >
                        Add Item
                </button>
            </div>
    );

}

// UseEffect -> dispatch({ type: "GET_POSTS" }); -> rootSaga -> takeEvery -> getPosts
//  -> put action -> dispatch action -> reducer -> update state

 export default Posts;