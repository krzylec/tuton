package com.tuton.backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FlashcardDto {
    private long id;
    private String frontText;
    private String backText;
    private long lessonId;
}
