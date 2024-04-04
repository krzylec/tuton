import { useState } from "react";
import { Button, Input, Label } from "../components/basic";
import { login } from "../handlers/AuthenticationHandler";
import { UserLoginDto } from "../Dto";

export default function LoginView() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isPasswordEmpty = () => {
    return password.length === 0;
  };

  const handleLogin = () => {
    const user = {
      username: username,
      password: password,
    };
    login(user);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <Label text="Login" />
            <Input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Login"
            />
          </div>
          <div className="mb-6">
            <Label text="Hasło" />
            <Input
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
