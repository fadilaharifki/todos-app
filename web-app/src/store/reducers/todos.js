import { SET_DATA_TODOS, SET_SEARCH_DATA } from "../actionType";

const initialState = {
    todos: '',
    search: '',
    // isLodaing: true,
    // isError: false,
}

export default function todosReducer(state = initialState, action) {
    const { type, payload } = action
    if (type === SET_DATA_TODOS) {
        return { ...state, todos: payload }
    } else if (type === SET_SEARCH_DATA) {
        return { ...state, search: payload }
    }
    // else if (type === SET_DATA_TODOS_LOADING) {
    //     return { ...state, isLodaing: payload }
    // } else if (type === SET_DATA_TODOS_ERROR) {
    //     return { ...state, isError: payload }
    // }
    return state
}