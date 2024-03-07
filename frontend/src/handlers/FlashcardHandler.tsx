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

export const handleCreateFlashcard = async (
    newFlashcard: FlashcardDto,
    setNewFlashcard: React.Dispatch<React.SetStateAction<FlashcardDto>>,
    toFetch: React.Dispatch<React.SetStateAction<FlashcardDto[]>>
) => {
    try {
        await axios.post("http://localhost:8080/flashcard", newFlashcard);
        setNewFlashcard({id: 0, flashcardText: '', lessonId: 0});
        fetchFlashcards(toFetch);
    } catch (error) {
        console.error('Error creating flashcard:', error);
    }
};

// };