import axios from "axios";
import API_URL from "./Config";
import { UserLoginDto } from "../Dto";

const endpoint = `${API_URL}`;

export const login = async (userToLogin: UserLoginDto) => {
  const response = await axios.post(`${endpoint}login`, userToLogin);
  const storedRoles = sessionStorage.setItem(
    "userRoles",
    JSON.stringify(response.data)
  );
};
