import { SET_DATADETAIL, SET_DATADETAIL_LOADING, SET_DATADETAIL_ERROR } from "../actionType";

export function setDataDetail(input) {
    return {
        type: SET_DATADETAIL,
        payload: input
    }
}

export function setDataDetailLoading(input) {
    return {
        type: SET_DATADETAIL_LOADING,
        payload: input
    }
}

export function setDataDetailError(input) {
    return {
        type: SET_DATADETAIL_ERROR,
        payload: input
    }
}

export function fetchDataDetail(id) {
    return (dispatch) => {

        dispatch(setDataDetailLoading(true))
        fetch(`https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad,ar.alafasy`)
            .then((res) => res.json())
            .then((result) => {
                dispatch(setDataDetail(result))
                dispatch(setDataDetailLoading(false))
            })
            .catch((err) => {
                dispatch(setDataDetailError(true))
                dispatch(setDataDetailLoading(false))
            })
    }
}
