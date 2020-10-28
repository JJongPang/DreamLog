import { combineReducers } from 'redux';
import write, { writeSaga } from './write';
import loading from './loading';
import { all } from 'redux-saga/effects';
import post, { postSaga } from './post';

const rootReducer = combineReducers({
    write,
    loading,
    post,
});

export function* rootSaga() {
    yield all([writeSaga(), postSaga()]);
}

export default rootReducer;
