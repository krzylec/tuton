export interface FlashcardDto {
  id: number;
  frontText: string;
  backText: string;
  lessonId: number;
}

export interface LessonDto {
  id: number;
  description: string;
  creationDate: string;
  flashcards: FlashcardDto[];
}

export interface VideoDto {
  id: string;
  title: string;
  location: string;
}

export interface UserLoginDto {
  username: string;
  password: string;
}
