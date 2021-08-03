import { SET_DATADETAIL } from "../actionType";

export function setDataDetail(input) {
    return {
        type: SET_DATADETAIL,
        payload: input
    }
}

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
