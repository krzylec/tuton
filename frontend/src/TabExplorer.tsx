import LessonView from "./views/LessonView";
import ListView from "./views/ListView";
import LoginView from "./views/LoginView";
import ToDoView from "./views/ToDoView";
import AdminView from "./views/AdminView";
import { Link, Routes, Route } from "react-router-dom";

export default function TabExplorer() {
  const dataList = [
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
    "Label 5",
    "Label 6",
    "Label 7",
    "Label 8",
    "Label 9",
    "Label 10",
  ];

  return (
    <div>
      {/* Przyciski zakładek */}
      <div className="flex justify-center m-1 flex-auto">
        <Link
          to="/list"
          className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md"
        >
          Lista
        </Link>
        <Link
          to="/lesson/1"
          className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md"
        >
          Lesson
        </Link>
        <Link
          to="/login"
          className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md"
        >
          Logowanie
        </Link>
        <Link
          to="/todo"
          className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md"
        >
          todo list
        </Link>
        <Link
          to="/admin"
          className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md"
        >
          Admin
        </Link>
      </div>

      <Routes>
        <Route path="/list" element={<ListView labelList={dataList} />} />
        <Route path="/lesson/:lessonId" element={<LessonView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/todo" element={<ToDoView />} />
        <Route path="/admin" element={<AdminView />} />
      </Routes>
    </div>
  );
}
