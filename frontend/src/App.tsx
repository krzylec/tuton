import React from "react";
import TabExplorer from "./TabExplorer";
import LoginView from "./views/LoginView";
import { Route, Routes } from "react-router-dom";
import AdminView from "./views/AdminView";
import LessonView from "./views/LessonView";
import ListView from "./views/ListView";
import LogoutView from "./views/LogoutView";
import ToDoView from "./views/ToDoView";

function App() {
  return (
    <>
      <h1 className="text-center m-2 text-3xl font-bold hover:animate-spin">
        TUTON
      </h1>
      {localStorage.getItem("token") === null ? <LoginView /> : <TabExplorer />}
      {`Bearer ${localStorage.getItem("token")}`}
    </>
  );
}

export default App;
