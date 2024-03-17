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
        return new FlashcardMapper().toDto(flashcardService.getFlashcardList());
    }

    public FlashcardDto getFlashcardById(long id) {
        return new FlashcardMapper().toDto(flashcardService.getFlashcardById(id));
    }

    public FlashcardDto saveFlashcard(FlashcardDto flashcardDto) {
        return new FlashcardMapper()
                .toDto(flashcardService.saveFlashcard(new FlashcardMapper().toEntity(flashcardDto)));
    }

    public FlashcardDto updateFlashcard(FlashcardDto flashcardDto) {
        return new FlashcardMapper()
                .toDto(flashcardService.updateFlashcard(new FlashcardMapper().toEntity(flashcardDto)));
    }

    public void deleteFlashcard(Long id) {
        flashcardService.deleteFlashcard(id);
    }
}
