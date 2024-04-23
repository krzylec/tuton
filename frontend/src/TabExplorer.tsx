import LessonView from "./views/LessonView";
import ListView from "./views/ListView";
import LoginView from "./views/LoginView";
import ToDoView from "./views/ToDoView";
import AdminView from "./views/AdminView";
import { Link, Routes, Route } from "react-router-dom";
import LogoutView from "./views/LogoutView";
import App from "./App";

export default function TabExplorer() {
  return (
    <div>
      {/* Przyciski zakładek */}
      <div className="flex justify-center m-1 mb-5 flex-auto">
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
          to="/logout"
          className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md"
        >
          Logout
        </Link>
        <Link
          to="/todo"
          className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md"
        >
          todo list
        </Link>
        {
          //TODO check roles
          <Link
            to="/admin"
            className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md"
          >
            Admin
          </Link>
        }
      </div>

      <Routes>
        <Route path="" element={<App />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/logout" element={<LogoutView />} />
        <Route path="/list" element={<ListView />} />
        <Route path="/lesson/:lessonId" element={<LessonView />} />
        <Route path="/todo" element={<ToDoView />} />
        <Route path="/admin" element={<AdminView />} />
      </Routes>
    </div>
  );
}
