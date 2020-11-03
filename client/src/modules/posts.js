import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSags';
import * as postsAPI from '../lib/api//posts';
import { takeLatest } from 'redux-saga/effects';

const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] = createRequestActionTypes('posts/LISTS_POSTS');

export const listPosts = createAction(LIST_POSTS);

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.getEditorList);
export function* postsSaga() {
    yield takeLatest(LIST_POSTS, listPostsSaga);
}

const initialState = {
    posts: null,
    error: null,
};

const posts = handleActions(
    {
        [LIST_POSTS_SUCCESS]: (state, action) => ({
            ...state,
            posts: action.payload,
        }),
        [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState
);

export default posts;
