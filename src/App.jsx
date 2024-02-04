import "./App.css";
import Test from "./Test";
import Myfunction from "./Component";
import Head from "./blank";
import Note from "./Jack";
import Export from "./Map";
import Print from "./Newpage";
import { useState } from "react";
function App() {
  const topi = "pokemin";
  const pacman = "this is a name of game";
  const king = "This is a table";
  const pass = "Hello world";
  const [data, setData] = useState(<Note />);
  return (
    <>
      <button onClick={() => setData(<Note />)}>ChANGE ME</button>
      <button onClick={() => setData(<Print />)}>New page</button>
      {data}
      <Test />
      <Myfunction like={topi} link={pacman} name={king} />
      <Head class={pass} />
      <Export />
      <Print />
      <div></div>
    </>
  );
}

export default App;
