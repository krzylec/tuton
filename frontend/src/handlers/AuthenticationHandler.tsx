import axios from "axios";
import API_URL from "./Config";
import { UserLoginDto } from "../Dto";

const endpoint = `${API_URL}`;

export const login = async (userToLogin: UserLoginDto) => {
  const response = await axios.post(`${endpoint}/login`, userToLogin);
  localStorage.setItem("roles", JSON.stringify(response.data));
};
