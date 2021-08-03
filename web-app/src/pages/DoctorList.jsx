import React from 'react'
import { useSelector } from 'react-redux'
import CardDoctor from '../components/CardDoctor';

export default function DoctorList() {
    const data = useSelector(state => state.dataTodos.search)

    if (!data) {
        return (
            <h1>Loading ...</h1>
        )
    }
    return (
        <div className="grid grid-cols-4 mmd:grid-cols-2 mmd:text-xs cursor-pointer gap-2 place-content-center">
            {
                data.map((e, i) => {
                    return (
                        <div key={i}>
                            <CardDoctor list={e} />
                        </div>
                    )
                })
            }
        </div>
    )
}