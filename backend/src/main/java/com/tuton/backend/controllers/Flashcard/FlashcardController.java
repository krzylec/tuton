package com.tuton.backend.controllers.flashcard;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tuton.backend.dto.FlashcardDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class FlashcardController {

    private final FlashcardFacade flashcardFacade;

    @GetMapping("/flashcards")
    List<FlashcardDto> readAllFlashcardDtos() {
        return flashcardFacade.getFlashcardList();
    }

}
