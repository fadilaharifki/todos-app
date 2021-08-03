import { SET_DATADETAIL } from "../actionType";

const initialState = {
    data: '',
    isLodaing: true,
    isError: false,
}

export default function dataDetailReducer(state = initialState, action) {
    const { type, payload } = action
    if (type === SET_DATADETAIL) {
        return { ...state, data: payload }
    }
    return state
}