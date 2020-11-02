import { combineReducers } from 'redux';
import write, { writeSaga } from './write';
import loading from './loading';
import { all } from 'redux-saga/effects';
import post, { postSaga } from './post';
import list, { postsSaga } from './list';

const rootReducer = combineReducers({
    write,
    loading,
    post,
    list,
});

export function* rootSaga() {
    yield all([writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;
