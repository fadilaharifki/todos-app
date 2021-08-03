import React, { useEffect, useState } from 'react'
import { fetchData, filterTodos } from '../store/actions/todos'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Home() {
    const dispatch = useDispatch()
    const history = useHistory()
    const data = useSelector(state => state.dataTodos.todos)
    const [text, setText] = useState('')
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    const inputSearch = (e) => {
        let matches = []
        if (e.target.value) {
            if (text.length > 0) {
                matches = data.filter(resultData => {
                    const regex = new RegExp(`${text}`, "gi");
                    return resultData.address.match(regex)
                })
            }
            setSuggestions(matches)
            setText(e.target.value)
        } else {
            matches = []
            setSuggestions(matches)
            setText('')
        }
    }

    const suggesHendler = (e) => {
        setText(e)
        setSuggestions([])
    }

    const search = (e) => {
        e.preventDefault()
        dispatch(filterTodos(text))
        history.push('/doctorlist')
    }

    return (
        <>
            <div className="flex flex-row justify-center">
                <div className="mt-10">
                    <form onSubmit={search} className="grid grid-cols-2 mmd:grid-cols-1">
                        <div>
                            <input onChange={inputSearch}
                                value={text}
                                className="border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-2" type="text" placeholder="search location" />
                            {suggestions && suggestions.map((suggestion, i) => {
                                return (
                                    <div key={i} onClick={() => suggesHendler(suggestion.address)} className="text-gray-500 cursor-pointer hover:bg-blue-300 px-2 py-0.5">{suggestion.address}</div>
                                )
                            })}
                        </div>
                        <div className="mmd:flex mmd:flex-row mmd:items-end mmd:justify-end mmd:mt-4 h-96">
                            <button type="submit" className="bg-blue-400 ml-5 px-2 py-0.5 rounded-lg text-white hover:bg-blue-600">find Doctor</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}