import React from "react";
import Image from "next/image";
import gif from "../../public/images/enterprenuer.gif"

function Entrepreneurial() {
  return (
    <div className="bg-slate-100 py-20 lg:py-40 relative">
      <Image className="fill-white" src={gif}/>
      
    </div>
  );
}
export default Entrepreneurial;