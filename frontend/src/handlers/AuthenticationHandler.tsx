import axios from "axios";
import API_URL from "./Config";
import { UserLoginDto } from "../Dto";

const endpoint = `${API_URL}`;

export const login = async (userToLogin: UserLoginDto) => {
  try {
    const response = await axios.post(`${endpoint}/login`, userToLogin);
    localStorage.setItem("token", response.data.token);
    console.log("success loging" + response.data);
    // Redirect or handle successful login
  } catch (error) {
    // Handle login error
  }
};

export const logout = async () => {
  try {
    await axios.get(`${endpoint}/logout`);
    localStorage.removeItem("token");
  } catch (error) {
    console.log(
      "oopsie logout nie dziala token: " + localStorage.getItem("token")
    );
  }
};
