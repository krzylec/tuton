package com.tuton.backend.mappers;

import com.tuton.backend.dto.FlashcardDto;
import com.tuton.backend.model.Flashcard;

public class FlashcardMapper {

    private FlashcardMapper() {
    }

    public static FlashcardDto toDto(Flashcard flashcard) {

        return FlashcardDto.builder()
                .id(flashcard.getId())
                .flashcardText(flashcard.getFlashcardText())
                .lessonId(flashcard.getLesson().getId())
                .build();
    }
}
