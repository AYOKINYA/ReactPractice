import { throttle, put, call, all, fork, takeLeading} from "redux-saga/effects";
import api from '../api';

import {getPostsSuccess, getPostsFail, addPostSuccess, addPostFail } from '../actions/post'

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
        const {data} = yield call(api.addPost, action.newTodo); // call: call API
        yield put(addPostSuccess({ ...action.newTodo, ...data })); //put : dispatch Action
    } catch (error) {
        yield put(addPostFail(error));
    }
}

function* addPostWatcher() {
    yield takeLeading("ADD_POST", addPost);
  }
  

function* rootSaga() {
    yield all([fork(watchGetPosts), fork(addPostWatcher)]);

    // all은 배열을 받고, 받은 이펙트를 등록 (실행 아님, 등록임!!)
    // fork는 함수를 실행
}

export default rootSaga;