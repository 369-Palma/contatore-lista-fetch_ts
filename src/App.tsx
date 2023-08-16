/* OPPURE COSI':const App = () => <>Hello React</>; */

import { Empty } from "./components/Empty";
import { Total } from "./components/Total";

/* function App() {
  return <>Hello</>;
} */

function App() {
  const totalProd = 5;

  function inc(e: React.MouseEvent) {
    console.log("Ciao", e.clientY, e.clientX);
  }

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
    </>
  );
}

export default App;
