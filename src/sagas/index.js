import { throttle, put, call } from "redux-saga/effects";
import api from '../api';
import allActions from '../actions';

function* getPosts() {
    try {
        const { data } = yield call(api.getPosts); // call: call API
        yield put(allActions.getPostsSuccess(data)); //put : dispatch Action
    } catch (error) {
        yield put(allActions.getPostsFail(error));
    }
}

function* rootSaga() {
    yield throttle(500, "GET_POSTS", getPosts);
}

export default rootSaga;