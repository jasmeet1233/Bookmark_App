import React from 'react'
import {FiFilter} from 'react-icons/fi'

const Filter = () => {
    return (
        <div className = 'ml-6 border-solid border-2 border-black flex'>
            <input placeholder = 'Search..' type="text" className = 'pl-2 w-72 bg-gray-200 rounded-lg'/>
            <button className = 'border-2 rounded-lg p-px pr-4 pl-3 border-purple-600'>+ Add Link</button>
        </div>
    )
}

export default Filter
