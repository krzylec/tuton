package com.tuton.backend.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class LessonDto {

    private long id;
    private String description;
    private LocalDateTime creationDate;
    private List<FlashcardDto> flashcards;
}
