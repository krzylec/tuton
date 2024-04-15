import { Button } from "../components/basic";
import { logout } from "../handlers/AuthenticationHandler";

export default function LoginView() {
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xs">
        <Button text="logout" onClick={() => handleLogout()} />
      </div>
    </div>
  );
}
