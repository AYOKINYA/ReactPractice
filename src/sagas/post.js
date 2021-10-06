import { throttle, put, call, fork, takeLeading, takeEvery} from "redux-saga/effects";
import api from '../api';

import {getPostsSuccess, getPostsFail, addPostSuccess, addPostFail, 
    editPostSuccess, editPostFail, deletePostSuccess, deletePostFail} from '../actions/post'

function* getAllPosts() {
    try {
        const { data } = yield call(api.getPosts); // call: call API
        yield put(getPostsSuccess(data)); //put : dispatch Action
    } catch (error) {
        yield put(getPostsFail(error));
    }
}

function* watchGetPosts() {
    yield throttle(500, "GET_POSTS", getAllPosts); //take, takeEvery, takeLatest, debounce...
}

function* addPost(action) {
    try {
        const {data} = yield call(api.addPost, action.newPost); // call: call API
        yield put(addPostSuccess({ ...action.newPost, ...data })); //put : dispatch Action
    } catch (error) {
        yield put(addPostFail(error));
    }
}

function* addPostWatcher() {
    yield takeLeading("ADD_POST", addPost);
  }


function* editPost(action) {
    try {
        const {data} = yield call(api.editPost, action.id, action.editedPost); // call: call API
        yield put(editPostSuccess(action.id, data)); //put : dispatch Action
    } catch (error) {
        yield put(editPostFail(error));
    }
}

function* editPostWatcher() {
    yield takeEvery('EDIT_POST', editPost) // Remember to create an action that returns this action type(UPDATE_REQUEST);
}

function* deletePost(action) {
    try {
        yield call(api.deletePost, action.id); // call: call API
        yield put(deletePostSuccess(action.id)); //put : dispatch Action
    } catch (error) {
        yield put(deletePostFail(error));
    }
}

function* deletePostWatcher() {
    yield takeEvery('DELETE_POST', deletePost) // Remember to create an action that returns this action type(UPDATE_REQUEST);
}


const postSagas = [
    fork(watchGetPosts),
    fork(addPostWatcher),
    fork(editPostWatcher),
    fork(deletePostWatcher)
];

export default postSagas;