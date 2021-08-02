import React from 'react'
import { useSelector } from 'react-redux'

export default function DoctorList() {
    const data = useSelector(state => state.dataTodos.search)
    console.log(data, 'ini doctorlist??????????');


    return (
        <div>DocterList</div>
    )
}