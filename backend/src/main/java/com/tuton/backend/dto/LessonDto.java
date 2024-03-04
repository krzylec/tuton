package com.tuton.backend.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

import com.tuton.backend.model.Flashcard;

@Data
@Builder
public class LessonDto {

    private long id;
    private String url;
    private List<Flashcard> flashcards;
    private long lessonId;
}
