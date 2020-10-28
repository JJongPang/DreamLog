import { createAction, handleActions } from 'redux-actions';

const START_LOADIG = 'loading/START_LOADIG';
const FINISTH_LOADING = 'loading/FINISTH_LOADING';

//요청을 위한 액션 타입을  payload로 설정합니다.(예: "sample/GET_POST")

export const startLoading = createAction(START_LOADIG, (requestType) => requestType);
export const finishLoading = createAction(FINISTH_LOADING, (requestType) => requestType);

const initialState = {};

const loading = handleActions(
    {
        [START_LOADIG]: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
        [FINISTH_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: false,
        }),
    },
    initialState
);

export default loading;
