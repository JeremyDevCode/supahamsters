import React from "react";

function Header() {
  return (
    <header className="w-full h-fit flex flex-col gap-20">
      <h1 className="flex justify-center w-full lg:text-9xl sm:text-7xl text-5xl font-extrabold">
        <span className="text-green-400">Supa</span>{" "}
        <span className="text-[#e39c62] relative">
          Hamsters!
          <img
            className="absolute top-1 lg:left-52 lg:w-20 lg:h-20 sm:left-28 sm:w-12 sm:h-12 left-20 w-7 h-7"
            src="https://images.vexels.com/media/users/3/281852/isolated/preview/4e9648b2e1579595b087531c51dfb09d-ha-mster-conejillo-de-indias-animales-de-compaa-a-a.png"
          />
        </span>
      </h1>
    </header>
  );
}

export { Header };
