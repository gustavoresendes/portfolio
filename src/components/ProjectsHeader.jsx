import React from "react";

function ProjectsHeader() {
  return (
    <div className="bg-[#302F3D] col-span-2 rounded-2xl w-[900px] h-[90px] flex justify-between items-center px-6">
      <h2 className="font-bold text-xl">My Projects</h2>
      <a href="https://github.com/gustavoresendes" target="_blank">
        <p>See all</p>
      </a>
    </div>
  );
}

export default ProjectsHeader;
