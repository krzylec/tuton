import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Button, Input, Label } from "../components/basic";

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

  const handleLogin = async () => {
    const data = {
      username: username,
      password: password,
    };

    console.log(data);

    // axios.get('http://localhost:8080/hello').then(value => {
    //   // console.log(value.data);
    // }).catch(reason => {
    //   console.log(reason)
    // })
    // .post("url_do_api/logowanie", data)
    // .then((response) => {
    //   console.log("Zalogowano pomyślnie!", response.data);
    // })
    // .catch((error) => {
    //   console.error("Błąd logowania:", error.response.data);
    // });

    try {
      const response: AxiosResponse = await axios.get(
        "" + "http://localhost:8080/hello",
      );
      const responseData: string = response.data;
      console.log(responseData);
    } catch (error) {}
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <Label htmlFor="username" text="Login" />
            <Input
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Login"
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="password" text="Hasło" />
            <Input
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
            <Button onClick={handleLogin} text="Zaloguj się" />
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="https://memy.pl/show/big/uploads/Post/241627/15414986099022.jpg"
            >
              Nie pamiętasz hasła?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
