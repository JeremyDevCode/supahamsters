import React from "react";
import Hamster from "../assets/images/hamster.png";
import { useHamsters } from "../hooks/useHamsters";

const inputStyle = "w-full h-full text-[#E3E6E8] bg-transparent outline-none";
const labelStyle =
  "flex flex-col text-xl rounded-md text-gray-400 bg-[#FFFFFF11] py-3 px-5 capitalize";

const REQUIREMENTS = [
  { name: "name", type: "text" },
  { name: "description", type: "text" },
  { name: "breed", type: "text" },
  { name: "cuteness", type: "number" },
  { name: "image", type: "text" },
];

function Main({
  hamster,
  inputHandler,
  checkHamster,
  createHamsters,
  editHamsters,
}) {
  return (
    <section className="flex lg:flex-row flex-col w-full z-10 relative lg:items-end items-center justify-between h-full lg:mb-40">
      <div>
        <h2 className="2xl:text-6xl md:text-5xl text-3xl text-green-400 font-bold mb-8">
          Create a new hamster
        </h2>
        <form
          className="flex flex-col gap-5 w-full"
          onSubmit={(event) => {
            event.preventDefault();
            if (
              hamster.name &&
              hamster.breed &&
              hamster.image &&
              hamster.cuteness
            ) {
              if (checkHamster(hamster.id)) {
                editHamsters(hamster);
              } else {
                createHamsters(hamster);
              }
            } else {
              alert("Te faltan campos, espabila");
            }
          }}
        >
          {REQUIREMENTS.map((input) => (
            <label htmlFor={input.name} className={labelStyle} key={input.name}>
              {input.name}
              <input
                type={input.type}
                name={input.name}
                id={input.name}
                onChange={inputHandler}
                value={hamster[input.name] ? hamster[input.name] : ""}
                className={inputStyle}
                autoComplete="off"
                autoCorrect="off"
              />
            </label>
          ))}
          <button
            type="submit"
            className="bg-green-400 p-5 text-4xl rounded-lg text-[#242426] font-semibold mt-5 w-full"
          >
            Create my cute hamster
          </button>
        </form>
      </div>
      <img className="2xl:scale-125 xl:scale-100 lg:scale-75" src={Hamster} />
    </section>
  );
}

export { Main };
