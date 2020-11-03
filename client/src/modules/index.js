import { combineReducers } from 'redux';
import write, { writeSaga } from './write';
import loading from './loading';
import { all } from 'redux-saga/effects';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import auth from './auth';

const rootReducer = combineReducers({
    auth,
    write,
    loading,
    post,
    posts,
});

export function* rootSaga() {
    yield all([writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;
