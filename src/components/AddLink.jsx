import React from 'react'

const AddLink = () => {
    return (
      <div className="h-64 m-6 rounded-lg w-full bg-purple-600 pl-10 pt-7">
        <p className="text-white text-2xl pb-5">Add a quick link</p>
        <p className="text-white">URL</p>
        <input type="text" className=" rounded-lg w-80" />
        <br />
        <br />
        <div className="flex justify-between w-3/5">
          <div>
            <p className="text-white">Folder</p>
            <input type="text" className="rounded-lg " />
          </div>
          <button className="bg-white h-8 align-bottom rounded-lg pl-2 pr-2 mt-4">Save</button>
        </div>
      </div>
    );
}

export default AddLink
