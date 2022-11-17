import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    // center the content vertically
    <div className="App flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl">Vite + React</h1>
      <div className="text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="p-3 m-2 text-white rounded bg-blue-500 hover:bg-blue-600"
        >
          count is {count}
        </button>
        <p className="text-2xl">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-2xl italic">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
