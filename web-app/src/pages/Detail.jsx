import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataDetail } from '../store/actions/detail';

export default function Detail() {
    let id = useParams()
    const dispatch = useDispatch()
    const dataDetail = useSelector(state => state.dataDetail.data)
    console.log(dataDetail);

    useEffect(() => {
        dispatch(fetchDataDetail(id.id))
    }, [dispatch, id.id])

    if (!dataDetail) {
        return (
            <div>loading...</div>
        )
    }
    return (
        <div className="grid grid-rows m-10">
            <div className="flex justify-center">
                <div>
                    <img className="w-36" src={dataDetail.img} alt="" />
                </div>
                <div className="flex flex-col items-center ml-2">
                    <div className="text-5xl font-bold ml-2 mr-2 mb-2">{dataDetail.id}</div>
                    <div className="ml-2 mr-2 mb-2 font-normal">Recomendation</div>
                    <div className="ml-2 mr-2 mb-2 font-normal">Sechadule on</div>
                    <div className="ml-2 mr-2 mb-2 font-normal">{dataDetail.sechadule}</div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-72 mr-10 mt-4">
                    <div className="text-2xl font-semibold mb-2">{dataDetail.name}</div>
                    <div className="mb-2">{dataDetail.address}</div>
                    <div className="mb-2">IDR {dataDetail.price}</div>
                    <div className="mb-2">{dataDetail.experience}</div>
                    <div className="mb-2">{dataDetail.overview}</div>
                </div>
            </div>
            <div className="flex justify-center">
                <iframe
                    className="w-96"
                    id="gmap_canvas"
                    src={`https://maps.google.com/maps?q=${dataDetail.address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                ></iframe>
            </div>
        </div>
    )
}