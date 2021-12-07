import React from "react";
import { BsBell } from "react-icons/bs";

// function Button({ text, bg, padding }) {
//   return (
//     <div>
//       <button
//         className={`
//           ${padding || "px-6 py-2"} text-sm font-semibold uppercase 
//           rounded-sm text-white transition ${bg}`}
//       >
//         <span>{text}</span>
//       </button>
//     </div>
//   );
// }

const buttonEffect =
  "text-gray-900 h-full p-3 pt-4 border-solid border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600";

function Navbar() {
  return (
    <nav class="flex items-center ml-20 h-14  justify-between ">
      <h1 class="font-semibold uppercase text-lg text-gray-900">LOGO</h1>
      <div class="h-full">
        <ul class="flex items-center h-full justify-between w-72">
          <li class={`${buttonEffect}`}>Link</li>
          <li class={`${buttonEffect}`}>Images</li>
          <li class={`${buttonEffect}`}>Text</li>
        </ul>
      </div>

      <div className="flex items-center">
        <BsBell size="25" />
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          className=" rounded-full h-10 w-10 ml-5"
        />
        <p className="pl-2">Shivam Choudhry</p>
      </div>
    </nav>
  );
}

export default Navbar;
