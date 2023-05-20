import React from "react";

function Container({ children }) {
  return (
    <div className="mx-auto 2xl:w-[65%] w-[90%] flex flex-col items-center justify-center gap-20">
      {children}
    </div>
  );
}

export { Container };
