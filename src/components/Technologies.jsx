import React from "react";

const Technologies = () => {
  return (
    <div className="bg-[#302F3D] w-[350px] h-[200px] rounded-2xl text-ellipsis">
      <h3 className="font-bold text-lg p-4">Technologies</h3>
      <div className="px-4 flex gap-2 flex-wrap">
        <span className="bg-[#CB92B1] text-black p-2 rounded-[30px] font-bold text-xs hover:scale-110 hover:-rotate-3 transition-transform">
          JavaScript
        </span>
        <span className="bg-[#CB92B1] text-black p-2 rounded-[30px] font-bold text-xs hover:scale-110 hover:-rotate-3 transition-transform">
          ReactJS
        </span>
        <span className="bg-[#CB92B1] text-black p-2 rounded-[30px] font-bold text-xs hover:scale-110 hover:rotate-3 transition-transform">
          NodeJS
        </span>
        <span className="bg-[#CB92B1] text-black p-2 rounded-[30px] font-bold text-xs hover:scale-110 hover:-rotate-3 transition-transform">
          TypeScript
        </span>
        <span className="bg-[#CB92B1] text-black p-2 rounded-[30px] font-bold text-xs hover:scale-110 hover:rotate-3 transition-transform">
          CSS
        </span>
        <span className="bg-[#CB92B1] text-black p-2 rounded-[30px] font-bold text-xs hover:scale-110 hover:rotate-3 transition-transform">
          HTML
        </span>
      </div>
    </div>
  );
};

export default Technologies;
