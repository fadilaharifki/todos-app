import { SET_DATADETAIL, SET_DATADETAIL_LOADING, SET_DATADETAIL_ERROR } from "../actionType";

export function setDataDetail(input) {
    return {
        type: SET_DATADETAIL,
        payload: input
    }
}

// export function setDataDetailLoading(input) {
//     return {
//         type: SET_DATADETAIL_LOADING,
//         payload: input
//     }
// }

// export function setDataDetailError(input) {
//     return {
//         type: SET_DATADETAIL_ERROR,
//         payload: input
//     }
// }

export function fetchDataDetail(id) {
    return (dispatch) => {
        fetch(`http://localhost:4000/todos/${id}`)
            .then((res) => res.json())
            .then((result) => {
                dispatch(setDataDetail(result))
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
