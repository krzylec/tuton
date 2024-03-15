package com.tuton.backend.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class LessonDto {

    private long id;
    private String videoPath;
    private List<FlashcardDto> flashcards;
}
