import React from "react";

function Generate({ createHamsters }) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-20">
      <button
        onClick={() => {
          createHamsters({
            name: "Aitor Bello",
            description: "Este es un extraño Aitor Hamster",
            breed: "Perrito",
            image: "/hamster_21.png",
            cuteness: 10,
          });
        }}
        className="bg-[#e39c62] w-fit py-6 px-8 text-4xl rounded-lg text-[#242426] font-semibold"
      >
        Generate random hamster
      </button>
      <img src="https://em-content.zobj.net/source/microsoft-teams/363/hamster_1f439.png" />
    </div>
  );
}

export { Generate };
