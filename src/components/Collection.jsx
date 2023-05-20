import React from "react";
import { Button } from "../common/Button";
import { TrashIcon } from "../assets/icons/TrashIcon";
import { PencilIcon } from "../assets/icons/PencilIcon";

function Collection({ hamsters, createEdit, killHamsters }) {
  return (
    <section className="flex flex-col w-full gap-10 text-[#242426] font-medium">
      <h2 className="text-7xl text-[#e39c62] font-semibold">My Hamsters</h2>
      <div className="grid grid-cols-3 gap-8">
        {hamsters.map((hamster, index) => (
          <article
            key={index}
            className="flex flex-col items-center text-2xl gap-y-2 relative group/hamster"
          >
            <div className="w-full h-full absolute top-0 hidden group-hover/hamster:block bg-[#00000050] text-[#E3E6E8]">
              <Button
                className="absolute top-5 right-5 text-red-500"
                onClick={() => killHamsters(hamster.id)}
              >
                <TrashIcon />
              </Button>
              <Button
                className="absolute top-5 right-20 text-sky-500"
                onClick={() => createEdit(hamster.id)}
              >
                <PencilIcon />
              </Button>
              <p className="absolute bottom-8 left-8">{hamster.name}</p>
            </div>
            <img
              src={hamster.image}
              className="w-[500px] h-[500px] object-cover rounded-xl"
            ></img>
          </article>
        ))}
      </div>
    </section>
  );
}

export { Collection };
