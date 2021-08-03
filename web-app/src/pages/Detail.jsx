import React, { useEffect, useState, Component } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataDetail } from '../store/actions/detail';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class Detail extends Component {
//     static defaultProps = {
//         center: {
//             lat: 59.95,
//             lng: 30.33
//         },
//         zoom: 11
//     };

//     render() {
//         return (
//             // Important! Always set the container height explicitly
//             <div style={{ height: '100vh', width: '100%' }}>
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: "AIzaSyCJb5JOSIcFsAOqzjaQkzTUB6wm9ntlRCc" }}
//                     defaultCenter={this.props.center}
//                     defaultZoom={this.props.zoom}
//                 >
//                     <AnyReactComponent
//                         lat={59.955413}
//                         lng={30.337844}
//                         text="My Marker"
//                     />
//                 </GoogleMapReact>
//             </div>
//         );
//     }
// }

// export default Detail;


export default function Detail() {
    let id = useParams()
    const dispatch = useDispatch()
    const dataDetail = useSelector(state => state.dataDetail.data)
    console.log(dataDetail);
    const [coordinat, setCoordinat] = useState({
        center: {
            lat: -6.173650,
            lng: 106.775772
        }
    })
    console.log(coordinat);

    useEffect(() => {
        dispatch(fetchDataDetail(id.id))
    }, [dispatch, id.id])

    if (!dataDetail) {
        return (
            <div>loading...</div>
        )
    }
    return (
        <>
            <div className="grid grid-rows mt-10">
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
            </div >
            <div className="flex justify-center">
                {/* <iframe
                    className="w-96"
                    id="gmap_canvas"
                    src={`https://maps.google.com/maps?q=${dataDetail.address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                ></iframe> */}
                <div style={{ height: '50vh', width: '100%' }} className="mx-96 mmd:m-6">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyCJb5JOSIcFsAOqzjaQkzTUB6wm9ntlRCc" }}
                        defaultCenter={coordinat.center}
                        defaultZoom={11}
                    >
                        <AnyReactComponent
                            lat={dataDetail.lat}
                            lng={dataDetail.long}
                            text="Location"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </>
    )
}