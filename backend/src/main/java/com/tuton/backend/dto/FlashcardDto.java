package com.tuton.backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FlashcardDto {
    private long id;
    private String flashcardText;
    private long lessonId;
}
