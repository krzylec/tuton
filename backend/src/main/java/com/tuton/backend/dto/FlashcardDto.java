package com.tuton.backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FlashcardDto {
    private Long id;
    private String frontText;
    private String backText;
    private Long lessonId;
}
