package com.tuton.backend.controllers.flashcard;

import java.util.List;

import org.springframework.stereotype.Component;

import com.tuton.backend.dto.FlashcardDto;
import com.tuton.backend.mappers.FlashcardMapper;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class FlashcardFacade {

    private final FlashcardService flashcardService;

    public List<FlashcardDto> getFlashcardList() {
        return flashcardService.repository.findAll().stream()
                .map(FlashcardMapper::toDto)
                .toList();
    }

}
