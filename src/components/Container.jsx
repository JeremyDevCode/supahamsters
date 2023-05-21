import React from "react";

function Container({ children }) {
  return (
    <div className="mx-auto xl:w-[75%] w-[90%] flex flex-col items-center justify-center gap-20">
      {children}
    </div>
  );
}

export { Container };
