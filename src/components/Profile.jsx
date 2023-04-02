import React from "react";
import Typewriter from "typewriter-effect";

function Profile() {
  return (
    <div className="bg-[#302F3D] w-[350px] h-[290px] rounded-2xl flex justify-center items-center flex-col">
      <img
        src="./src/assets/profile.jpg"
        alt="profile-photo"
        className="w-[160px] h-[160px] rounded-full border-2 border-[#00FF00]"
      />

      <h1 className="pt-6 pb-2">
        Olá, eu sou {" "}
        <span className="font-bold">
          <Typewriter
            options={{
              strings: ["Gustavo Penna de Resendes"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
      <p className="italic">Front End Developer</p>
    </div>
  );
}

export default Profile;
