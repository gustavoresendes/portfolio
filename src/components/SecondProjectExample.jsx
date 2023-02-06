import React from "react";
import { Folder, Star, GitBranch, Circle } from "phosphor-react";

const SecondProjectExample = () => {
  return (
      <div className="bg-[#302F3D] rounded-2xl p-6 row-span-2">
        <Folder size={24} />
        <span className="font-bold p-4">github-profile-finder</span>
        <p className="text-sm text-center pt-4">
          Aplicação capaz de pesquisar por usuários do Github através de sua API
          pública
        </p>

        <footer className="flex pt-12 gap-4">
          <i className="not-italic text-sm flex gap-2">
            <Star size={20} />
            100
          </i>
          <i className="not-italic text-sm flex gap-2">
            <GitBranch size={20} />
            100
          </i>

          <i className="not-italic font-normal items-center flex gap-2 ml-40">
            <Circle size={14} weight="fill" color="cyan" />
            ReactJS
          </i>
        </footer>
      </div>
  );
};

export default SecondProjectExample;
