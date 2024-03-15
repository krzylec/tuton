export interface FlashcardDto {
    id: number;
    frontText: string;
    backText: string;
    lessonId: number;
}

export interface LessonDto {
    id: number;
    url: string;
    flashcardsList: FlashcardDto[];
}