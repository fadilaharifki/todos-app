import React, { useEffect, useState } from 'react'
import { fetchData, filterTodos } from '../store/actions/todos'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

export default function Home() {
    const dispatch = useDispatch()
    const [inputSrc, setInputSrc] = useState()
    const history = useHistory()

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    const inputSearch = (e) => {
        setInputSrc(e.target.value)
    }

    const search = (e) => {
        e.preventDefault()
        dispatch(filterTodos(inputSrc))
        history.push('/doctorlist')
    }

    return (
        <>
            <div className="flex flex-row justify-center">
                <div className="mt-10">
                    <form onSubmit={search}>
                        <input onChange={inputSearch} className="border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-2" type="text" placeholder="search location" />
                        <button type="submit" className="bg-blue-400 ml-5 px-2 py-0.5 rounded-lg text-white hover:bg-blue-600">find Doctor</button>
                    </form>
                </div>
            </div>
        </>
    )
}