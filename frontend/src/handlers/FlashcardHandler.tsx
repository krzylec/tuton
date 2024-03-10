import axios from 'axios';
import API_URL from './Config';

const endpoint = `${API_URL}flashcard`;

interface FlashcardDto {
    id: number;
    flashcardText: string;
    lessonId: number;
}

export const fetchFlashcards = async (setFlashcards: React.Dispatch<React.SetStateAction<FlashcardDto[]>>) => {
    try {
        const response  =await axios.get(`${endpoint}`);
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
        await axios.post(`${endpoint}`, newFlashcard);
        setNewFlashcard({id: 0, flashcardText: '', lessonId: 1});
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
        await axios.delete(`${endpoint}/${flashcardToDelete.id}`);
        fetchFlashcards(toFetch);
    } catch (error) {
        console.error("Error deleting flashcard: ", error);
    }
}

export const handleUpdateFlashcard = async (
    flashcardToUpdate: FlashcardDto,
    toFetch: React.Dispatch<React.SetStateAction<FlashcardDto[]>>
) => {
    try {
        let {id, ...flashcardData } = flashcardToUpdate;
        await axios.put(`${endpoint}/${flashcardToUpdate.id}`, flashcardData);
        fetchFlashcards(toFetch);
    } catch (error) {
        console.error("Error updating flashcard: ", error)
    }
}