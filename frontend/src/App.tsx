import React from "react";
import TabExplorer from "./TabExplorer";
import LoginView from "./views/LoginView";

function App() {
  return (
    <>
      <h1 className="text-center m-2 text-3xl font-bold hover:animate-spin">
        TUTON
      </h1>
      {sessionStorage.getItem("userRoles") !== null ? (
        <TabExplorer />
      ) : (
        <LoginView />
      )}
    </>
  );
}

export default App;
