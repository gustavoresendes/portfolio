import React from "react";

const PostExample = () => {
  return (
    <div className="bg-[#302F3D] col-span-2 rounded-2xl w-[900px] h-[200px] flex items-center">
      <img
        src="./src/assets/profile.jpg"
        alt="profile-picture"
        className="w-[128px] h-[128px] rounded-full m-6"
      />
      <div className="flex flex-col">
        <h3 className="font-bold text-lg">
          Aprendendo a utilizar API dentro do BackEnd com NodeJS
        </h3>
        <small className="mb-6">1 weeks ago</small>
        <p className="text-base mb-4">
          Utilizando API'S com Axios dentro do NodeJS
        </p>
        <p className="text-sm">#node-js #axios #backend #developer</p>
      </div>
    </div>
  );
};

export default PostExample;
