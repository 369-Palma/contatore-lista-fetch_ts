/* OPPURE COSI':const App = () => <>Hello React</>; */

import { useState } from "react";
import { Empty } from "./components/Empty";
import { Total } from "./components/Total";
import { Users } from "./components/Users";

/* function App() {
  return <>Hello</>;
} */

function App() {
  const [totalProd, setTotalProd] = useState<number>(2);

  /*CONTROLLO: function inc(e: React.MouseEvent) {
    console.log("Ciao", e.clientY, e.clientX);
  } */

  function inc() {
    setTotalProd((s) => s + 1);
  }
  console.log(totalProd);

  /*   const renderTotal = () => (
    <div>
      <h1>There are {totalProd} </h1>
    </div>
  );

  function renderEmpty() {
    return (
      <div>
        <em>No items </em>
      </div>
    );
  } */

  /*  return <>{totalProd > 0 ? renderTotal() : renderEmpty()}</>; */

  return (
    <>
      {totalProd > 0 ? <Total value={totalProd} /> : <Empty />}
      <button onClick={inc}>Add</button>

      <Users />
    </>
  );
}

export default App;
