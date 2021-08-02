import { SET_DATADETAIL, SET_DATADETAIL_LOADING, SET_DATADETAIL_ERROR } from "../actionType";

const initialState = {
    data: '',
    isLodaing: true,
    isError: false,
}

export default function dataDetailReducer(state = initialState, action) {
    const { type, payload } = action
    if (type === SET_DATADETAIL) {
        return { ...state, data: payload }
    } else if (type === SET_DATADETAIL_LOADING) {
        return { ...state, isLodaing: payload }
    } else if (type === SET_DATADETAIL_ERROR) {
        return { ...state, isError: payload }
    }
    return state
}