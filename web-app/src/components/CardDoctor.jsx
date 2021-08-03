import React from 'react'
import { useHistory } from 'react-router-dom';

export default function CardDoctor(props) {
    const history = useHistory()

    const detail = () => {
        history.push(`/doctorlist/detail/${props.list.id}`)
    }

    return (
        <div onClick={detail} className="grid grid-cols-2 gap-4 m-2 border-collapse border-2 p-2 rounded-lg">
            <div>
                <img src={props.list.img} />
            </div>
            <div className="flex flex-col justify-center">
                <div className="font-extrabold">{props.list.name}</div>
                <div>{props.list.address}</div>
                <div>IDR. {props.list.price}</div>
            </div>
        </div>
    )
}