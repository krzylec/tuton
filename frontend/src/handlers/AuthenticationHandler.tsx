import axios from "axios";
import API_URL from "./Config";
import { UserLoginDto } from "../Dto";

const endpoint = `${API_URL}`;
const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export const login = async (userToLogin: UserLoginDto) => {
  try {
    const response = await axios.post(`${endpoint}/login`, userToLogin);
    localStorage.setItem("token", response.data.token);
    console.log("success loging" + response.data);
    return true;
  } catch (error) {
    return false;
  }
};

export const logout = async () => {
  try {
    await axios.post(`${endpoint}/logout`, localStorage.getItem("token"), {
      headers,
    });
    localStorage.removeItem("token");
  } catch (error) {
    console.log("oopsie logout nie dziala token: " + headers.Authorization);
  }
};
