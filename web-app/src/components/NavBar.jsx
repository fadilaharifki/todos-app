import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <Link to="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</Link>
            </div>
            <div>
                <Link to="/doctorlist" className="text-lg no-underline text-grey-400 hover:text-blue-400 ml-2">Docter List</Link>
                {/* <Link to="/two" className="text-lg no-underline text-grey-400 hover:text-blue-400 ml-2">Two</Link>
                <Link to="/three" className="text-lg no-underline text-grey-400 hover:text-blue-400 ml-2">Three</Link> */}
            </div>
        </div>
    )
}