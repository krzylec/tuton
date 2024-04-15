import axios from "axios";
import API_URL from "./Config";
import { UserLoginDto } from "../Dto";

const endpoint = `${API_URL}`;

export const login = async (userToLogin: UserLoginDto) => {
  let bodyFormData = new FormData();
  bodyFormData.append("username", userToLogin.username);
  bodyFormData.append("password", userToLogin.password);
  const response = await axios.postForm(
    `${endpoint}/login/process`,
    bodyFormData
  );
  sessionStorage.setItem("userRoles", JSON.stringify(response.data));
  console.log(response.data);
};
