package com.tuton.backend.mappers;

import java.util.List;

import javax.validation.Valid;

import com.tuton.backend.dto.LessonDto;
import com.tuton.backend.model.Lesson;

public class LessonMapper implements Mapper<Lesson, LessonDto> {

    @Override
    public LessonDto toDto(Lesson lesson) {
        return LessonDto.builder()
                .id(lesson.getId())
                .videoPath(lesson.getVideoPath())
                .flashcards(new FlashcardMapper().toDto(lesson.getFlashcards()))
                .build();
    }

    @Override
    public List<LessonDto> toDto(List<Lesson> lessons) {
        return lessons.stream()
                .map(this::toDto)
                .toList();
    }

    @Override
    public Lesson toEntity(@Valid LessonDto dto) {
        return Lesson.builder()
                .id(dto.getId())
                .videoPath(dto.getVideoPath())
                .flashcards(new FlashcardMapper().toEntity(dto.getFlashcards()))
                .build();
    }

    @Override
    public List<Lesson> toEntity(List<LessonDto> dtos) {
        return dtos.stream()
                .map(this::toEntity)
                .toList();
    }
}
