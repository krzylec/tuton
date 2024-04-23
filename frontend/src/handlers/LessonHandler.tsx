import axios from "axios";
import API_URL from "./Config";
import { LessonDto } from "../Dto";

const endpoint = `${API_URL}/lesson`;
const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export const fetchLessons = async (
  setLessons: React.Dispatch<React.SetStateAction<LessonDto[]>>
) => {
  try {
    const response = await axios.get(`${endpoint}`, { headers });
    setLessons(response.data);
  } catch (error) {
    console.error("Error fetching lessons: ", error);
  }
};

export const fetchLesson = async (lessonId: any) => {
  try {
    return await axios.get(`${endpoint}/${lessonId}`, { headers });
  } catch (error) {
    console.error("Error fetching lessons: ", error);
  }
};
