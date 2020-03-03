import React from "react";
import AppRouter from "./AppRouter.js";
import ContextWrapper from "./ContextWrapper";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <ContextWrapper>
          <AppRouter />
        </ContextWrapper>
      </main>
    </div>
  );
}

export default App;
