import { combineReducers } from 'redux';
import write, { writeSaga } from './write';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    write,
    loading,
});

export function* rootSaga() {
    yield all([writeSaga()]);
}

export default rootReducer;
