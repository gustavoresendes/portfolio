import React from "react";
import {
  MapPin,
  Suitcase,
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
} from "phosphor-react";

function Socials() {
  return (
    <div className="bg-[#302F3D] w-[350px] h-[350px] rounded-2xl py-6 px-10">
      <div className="flex flex-col gap-8">
        <i>
          <MapPin size={24} />{" "}
          <span className="not-italic text-md mx-1">Brazil</span>
        </i>
        <i>
          <Suitcase size={24} />{" "}
          <span className="not-italic text-md mx-1">Unemployee</span>
        </i>
        <a href="https://github.com/gustavoresendes" target="_blank">
          <i>
            <GithubLogo size={24} />{" "}
            <span className="not-italic text-md mx-1">gustavoresendes</span>
          </i>
        </a>
        <a href="https://www.linkedin.com/in/gustavo-penna1/" target="_blank">
          <i>
            <LinkedinLogo size={24} />{" "}
            <span className="not-italic text-md mx-1">gustavo-penna1</span>
          </i>
        </a>
        <a href="mailto:gustavopenna2001@gmail.com" target="_blank">
          <i>
            <EnvelopeSimple size={24} />{" "}
            <span className="not-italic text-sm mx-1">
              gustavopenna2001@gmail.com
            </span>
          </i>
        </a>
      </div>
    </div>
  );
}

export default Socials;
