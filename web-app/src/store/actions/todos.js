import { SET_DATA_TODOS, SET_SEARCH_DATA } from "../actionType";

export function setTodos(input) {
    return {
        type: SET_DATA_TODOS,
        payload: input
    }
}

export function searchData(input) {
    return {
        type: SET_SEARCH_DATA,
        payload: input
    }
}

export function fetchData() {
    return (dispatch) => {
        fetch(`http://localhost:4000/todos`)
            .then((res) => res.json())
            .then((result) => {
                dispatch(setTodos(result))
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export function filterTodos(input) {
    return (dispatch) => {
        fetch(`http://localhost:4000/todos?address=${input}`)
            .then((res) => res.json())
            .then((result) => {
                dispatch(searchData(result))
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
























// export function setDataAlquranLoading(input) {
//     return {
//         type: SET_DATA_ALQURAN_LOADING,
//         payload: input
//     }
// }

// export function setDataAlquranError(input) {
//     return {
//         type: SET_DATA_ALQURAN_ERROR,
//         payload: input
//     }
// }

// export function fetchDataAlquran(id) {
//     if (!id) {
//         return (dispatch) => {
//             dispatch(setDataAlquranLoading(true))
//             fetch(`https://api.alquran.cloud/v1/surah`)
//                 .then((res) => res.json())
//                 .then((result) => {
//                     dispatch(setDataAlquran(result))
//                     dispatch(setDataAlquranLoading(false))
//                 })
//                 .catch((err) => {
//                     dispatch(setDataAlquranError(true))
//                     dispatch(setDataAlquranLoading(false))
//                 })
//         }
//     }
//     return (dispatch) => {
//         dispatch(setDataAlquranLoading(true))
//         fetch(`https://api.alquran.cloud/v1/surah${id}`)
//             .then((res) => res.json())
//             .then((result) => {
//                 dispatch(setDataAlquran(result))
//                 dispatch(setDataAlquranLoading(false))
//             })
//             .catch((err) => {
//                 dispatch(setDataAlquranError(err))
//                 dispatch(setDataAlquranLoading(false))
//             })
//     }
// }

