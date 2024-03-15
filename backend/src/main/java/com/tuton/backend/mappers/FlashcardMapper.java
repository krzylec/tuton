package com.tuton.backend.mappers;

import java.util.ArrayList;
import java.util.List;

import com.tuton.backend.dto.FlashcardDto;
import com.tuton.backend.model.Flashcard;
import com.tuton.backend.model.Lesson;

public class FlashcardMapper implements Mapper<Flashcard, FlashcardDto> {

    @Override
    public Flashcard toEntity(FlashcardDto dto) {
        Lesson lesson = new Lesson();
        lesson.setId(dto.getLessonId());
        return Flashcard.builder()
                .id(dto.getId())
                .frontText(dto.getFrontText())
                .backText(dto.getBackText())
                .lesson(lesson)
                .build();
    }

    @Override
    public FlashcardDto toDto(Flashcard flashcard) {
        return FlashcardDto.builder()
                .id(flashcard.getId())
                .frontText(flashcard.getFrontText())
                .backText(flashcard.getBackText())
                .lessonId(flashcard.getLesson().getId())
                .build();
    }

    @Override
    public List<Flashcard> toEntity(List<FlashcardDto> dtos) {
        if (dtos == null) {
            return new ArrayList<>();
        }
        return dtos.stream()
                .map(this::toEntity)
                .toList();
    }

    @Override
    public List<FlashcardDto> toDto(List<Flashcard> flashcards) {
        return flashcards.stream()
                .map(this::toDto)
                .toList();
    }
}
