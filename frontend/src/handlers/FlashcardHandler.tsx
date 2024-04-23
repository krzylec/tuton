import axios, { AxiosHeaders } from "axios";
import API_URL from "./Config";
import { FlashcardDto } from "../Dto";

const endpoint = `${API_URL}flashcard`;
const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export const fetchFlashcards = async (
  setFlashcards: React.Dispatch<React.SetStateAction<FlashcardDto[]>>
) => {
  try {
    const response = await axios.get(`${endpoint}`, { headers });
    setFlashcards(response.data);
  } catch (error) {
    console.error("Error fetching flashcards: ", error);
  }
};

export const handleCreateFlashcard = async (
  newFlashcard: FlashcardDto,
  setNewFlashcard: React.Dispatch<React.SetStateAction<FlashcardDto>>,
  toFetch: React.Dispatch<React.SetStateAction<FlashcardDto[]>>
) => {
  try {
    await axios.post(`${endpoint}`, newFlashcard, { headers });
    setNewFlashcard({ id: 0, frontText: "", backText: "", lessonId: 1 });
    fetchFlashcards(toFetch);
  } catch (error) {
    console.error("Error creating flashcard: ", error);
  }
};

export const handleDeleteFlashcard = async (
  flashcardToDelete: FlashcardDto,
  toFetch: React.Dispatch<React.SetStateAction<FlashcardDto[]>>
) => {
  try {
    await axios.delete(`${endpoint}/${flashcardToDelete.id}`, { headers });
    fetchFlashcards(toFetch);
  } catch (error) {
    console.error("Error deleting flashcard: ", error);
  }
};

export const handleUpdateFlashcard = async (
  flashcardToUpdate: FlashcardDto,
  toFetch: React.Dispatch<React.SetStateAction<FlashcardDto[]>>
) => {
  try {
    await axios.put(`${endpoint}`, flashcardToUpdate, { headers });
    fetchFlashcards(toFetch);
  } catch (error) {
    console.error("Error updating flashcard: ", error);
  }
};
