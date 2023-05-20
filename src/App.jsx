import { useEffect } from "react";
import { useHamsters } from "./hooks/useHamsters";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Collection } from "./components/Collection";
import { Generate } from "./components/Generate";
import { Container } from "./components/Container";

function App() {
  const { state, stateUpdaters } = useHamsters();
  const { hamsters, hamster } = state;
  const {
    getHamsters,
    createHamsters,
    killHamsters,
    inputHandler,
    checkHamster,
    createEdit,
    editHamsters,
    setHamster,
  } = stateUpdaters;

  useEffect(() => {
    getHamsters();
  }, []);

  return (
    <main className="bg-[#0D0F12] w-full min-h-screen h-full py-12 relative">
      <Container>
        <Header />
        <Main
          hamster={hamster}
          checkHamster={checkHamster}
          inputHandler={inputHandler}
          editHamsters={editHamsters}
          createHamsters={createHamsters}
        />
        <Collection
          hamsters={hamsters}
          setHamster={setHamster}
          createEdit={createEdit}
          killHamsters={killHamsters}
        />
        <Generate createHamsters={createHamsters} />
      </Container>
      <img className="absolute top-0" src="/ellipseBlur.png" />
    </main>
  );
}

export default App;
