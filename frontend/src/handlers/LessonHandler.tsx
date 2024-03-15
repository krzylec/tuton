import axios from 'axios';
import API_URL from './Config';
import { FlashcardDto } from '../Dto';

const endpoint = `${API_URL}lesson`;

interface LessonDto {
    id: number;
    url: string;
    flashcardsList: FlashcardDto[];
}

export const fetchLessons = async (setLessons: React.Dispatch<React.SetStateAction<LessonDto[]>>) => {
    try {
        const response  =await axios.get(`${endpoint}`);
        setLessons(response.data);
    } catch (error) {
        console.error("Error fetching lessons: ", error);
    }
};