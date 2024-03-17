import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Collapsible from "./collapsible";
import ParentComponent, { ParentComponentV2 } from "./parent";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <h2>Parent component</h2>
        <ParentComponent>
          {(isOpen) => (
            <>
              <Collapsible title="Element 1" open={isOpen}>
                <h2>Hello</h2>
              </Collapsible>
              <Collapsible title="Element 2" open={isOpen}>
                <h2>Element 2</h2>
              </Collapsible>
            </>
          )}
        </ParentComponent>
        <hr />
        <h2>Parent component V2</h2>
        <ParentComponentV2>
          <Collapsible title="Element 1">
            <h2>Hello</h2>
          </Collapsible>
          <Collapsible title="Element 2">
            <h2>Element 2</h2>
          </Collapsible>
        </ParentComponentV2>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
