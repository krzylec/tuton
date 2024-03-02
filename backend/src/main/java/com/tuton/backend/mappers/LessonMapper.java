package com.tuton.backend.mappers;

import com.tuton.backend.dto.LessonDto;
import com.tuton.backend.model.Lesson;

public class LessonMapper {

    private LessonMapper() {
    }

    public static LessonDto toDto(Lesson lesson) {

        return LessonDto.builder()
                .id(lesson.getId())
                .url(lesson.getUrl())
                .flashcards(lesson.getFlashcards())
                .build();
    }
}
