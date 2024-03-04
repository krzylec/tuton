package com.tuton.backend.controllers.flashcard;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tuton.backend.dto.FlashcardDto;

import lombok.RequiredArgsConstructor;

@RestController()
@RequestMapping("/flashcard")
@RequiredArgsConstructor
public class FlashcardController {

    private final FlashcardFacade flashcardFacade;

    @GetMapping("")
    List<FlashcardDto> getAllFlashcards() {
        return flashcardFacade.getFlashcardList();
    }

    @GetMapping("/{id}")
    public FlashcardDto getFlashcard(@PathVariable long id) {
        return flashcardFacade.getFlashcardById(id);
    }

    @PostMapping("")
    public FlashcardDto saveFlashcard(@RequestBody FlashcardDto flashcardDto) {
        return flashcardFacade.saveFlashcard(flashcardDto);
    }

    @PutMapping("/{id}")
    public FlashcardDto updateFlashcard(@PathVariable Long id, @RequestBody FlashcardDto updatedFlashcard) {
        return flashcardFacade.updateFlashcard(id, updatedFlashcard);
    }

    @DeleteMapping("/{id}")
    public void deleteFlashcard(@PathVariable Long id) {
        flashcardFacade.deleteFlashcard(id);
    }
}
