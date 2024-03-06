import axios from 'axios';


interface FlashcardDto {
    id: number;
    flashcardText: string;
    lessonId: number;
}

export const fetchFlashcards = async (setFlashcards: React.Dispatch<React.SetStateAction<FlashcardDto[]>>) => {
    try {
        const response  =await axios.get("http://localhost:8080/flashcard");
        console.log(response)
        setFlashcards(response.data);
    } catch (error) {
        console.error("Error fetching flashcards: ", error);
    }
};

// export const handleCreateFlashcard = async (
//     newFlashcard: FlashcardDto,

// ) => {

// };