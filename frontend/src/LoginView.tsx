import { useState } from "react";
import axios from "axios";

interface FlashcardProps {
  title: string;
  content: string;
  contentFlipped: string;
}

export default function LoginView() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isPasswordEmpty = () => {
    return password.length === 0;
  };

  const handleLogin = () => {
    const data = {
      username: username,
      password: password,
    };

    console.log(data);

    // axios
    //   .post("url_do_api/logowanie", data)
    //   .then((response) => {
    //     console.log("Zalogowano pomyślnie!", response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Błąd logowania:", error.response.data);
    //   });
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Login
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Login"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Hasło
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Hasło"
          />
          {isPasswordEmpty() && (
            <p className="text-red-500 text-xs italic">Podaj hasło.</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Zaloguj się
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="https://memy.pl/show/big/uploads/Post/241627/15414986099022.jpg"
          >
            Nie pamiętasz hasła?
          </a>
        </div>
      </form>
    </div>
  );
}
