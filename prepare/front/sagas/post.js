import axios from "axios";
import {all, delay, fork, put, takeLatest} from "redux-saga/effects";

function addPostAPI() {
    return axios.post('/api/post');
}

function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        yield put({
            type: 'ADD_POST_SUCCESS',
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        })
    }
}

function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ])
}