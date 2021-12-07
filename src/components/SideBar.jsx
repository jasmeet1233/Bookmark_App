import React from "react";

const SideBar = () => {
  const sidebar = ["All Projects", "Root", "Favorites"];
  const sidebar2 = ['Folders', "Tags"]

  //relative tha
  return (
    <div className=" h-full ">  
      <aside className="h-full bg-white w-56">
        <div className="flex  flex-col pt-6 h-50">
          {sidebar.map((item, i) => {
            return (
              <button key ={i} className="p-3 rounded-lg hover:bg-purple-600 hover:text-white">
                {item}
              </button>
            );
          })}
        </div>

        <div className="m-3 h-px bg-gray-400"></div>

        <div className="flex justify-around mb-10 mt-6">
          {sidebar2.map((ele) => {
            return (
              <button className="border-solid border-b-2 border-transparent hover:text-purple-600 hover: border-purple-600">
                {ele}
              </button>
            );
          })}
        </div>

        <div className="flex justify-center">
          <input type="text" placeholder="Search" className="bg-gray-200 mr-1 rounded-lg pl-2 " />
          <button className="bg-gray-200 p-1  rounded-lg">+</button>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
