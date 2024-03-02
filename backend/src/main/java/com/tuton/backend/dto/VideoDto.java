package com.tuton.backend.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class VideoDto {

    private long id;
    private String url;

    private List<FlashcardDto> flashcards;
}
