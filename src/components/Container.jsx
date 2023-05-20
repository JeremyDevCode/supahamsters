import React from "react";

function Container({ children }) {
  return (
    <div className="mx-auto 2xl:w-[65%] lg:w-[90%] flex flex-col gap-20">
      {children}
    </div>
  );
}

export { Container };
