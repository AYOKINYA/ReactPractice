import { all } from "redux-saga/effects";
import postSagas from "./post";


function* rootSaga() {
    yield all([...postSagas]);

    // all은 배열을 받고, 받은 이펙트를 등록 (실행 아님, 등록임!!)
    // fork는 함수를 실행
}

export default rootSaga;