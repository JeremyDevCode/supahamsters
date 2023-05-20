import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const HAMSTERS = "Hamsters";
function useHamsters() {
  const supabase = createClient(
    import.meta.env.VITE_SUPA_URL,
    import.meta.env.VITE_SUPA_KEY
  );

  const [hamsters, setHamsters] = useState([]);
  const [result, setResult] = useState({});
  const [hamster, setHamster] = useState({});

  const getHamsters = async () => {
    const result = await supabase.from(HAMSTERS).select();
    setHamsters(result.data);
  };

  const checkHamster = (id) => {
    const newHamsters = [...hamsters];
    const result = newHamsters.findIndex((hamster) => (hamster.id = id));
    if (result !== -1) {
      return true;
    }
    return false;
  };

  const createHamsters = async (hamster) => {
    const result = await supabase.from(HAMSTERS).insert(hamster);
    setResult(result);
    getHamsters();
    setHamster({});
  };

  const editHamsters = async (hamster) => {
    const { id, ...toUpdate } = hamster;
    const result = await supabase.from(HAMSTERS).update(toUpdate).eq("id", id);
    setResult(result);
    getHamsters();
    setHamster({});
  };

  const killHamsters = async (id) => {
    const result = await supabase.from(HAMSTERS).delete().eq("id", id);
    setResult(result);
    getHamsters();
  };

  // const createDeleter = (id) => {
  //   return () => {
  //     killHamsters(id);
  //   };
  // };

  const createEdit = (id) => {
    const newHamsters = [...hamsters];
    const hamsterID = newHamsters.findIndex((hamster) => hamster.id === id);
    document.body.scrollIntoView({
      behavior: "smooth",
    });
    setHamster(newHamsters[hamsterID]);
  };

  const inputHandler = (event) => {
    setHamster((state) => {
      return {
        ...state,
        [event.target.name]: event.target.value,
      };
    });
  };

  const state = {
    hamsters,
    result,
    hamster,
  };
  const stateUpdaters = {
    getHamsters,
    createHamsters,
    editHamsters,
    killHamsters,
    inputHandler,
    createEdit,
    editHamsters,
    checkHamster,
    setHamster,
  };

  return { state, stateUpdaters };
}

export { useHamsters };
