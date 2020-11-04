import { combineReducers } from 'redux';
import write, { writeSaga } from './write';
import loading from './loading';
import { all } from 'redux-saga/effects';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
    auth,
    write,
    loading,
    post,
    posts,
    user,
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;
