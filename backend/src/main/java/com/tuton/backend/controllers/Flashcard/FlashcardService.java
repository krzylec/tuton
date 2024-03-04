package com.tuton.backend.controllers.flashcard;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tuton.backend.exceptions.custom.IDNotFoundException;
import com.tuton.backend.exceptions.custom.IncorrectInputException;
import com.tuton.backend.model.Flashcard;
import com.tuton.backend.repositories.FlashcardRepository;

@Service
public class FlashcardService {
    FlashcardRepository repository;

    public FlashcardService(FlashcardRepository repository) {
        this.repository = repository;
    }

    public List<Flashcard> getFlashcardList() {
        return repository.findAll();
    }

    public Flashcard getFlashcardById(long id) {
        return repository.findById(id)
                .orElseThrow(() -> new IDNotFoundException("Flashcard with given ID does not exists"));
    }

    public Flashcard saveFlashcard(Flashcard flashcard) {
        if (flashcard.getLesson().getId() == 0) {
            throw new IncorrectInputException("You must provide lesson id");
        }
        return repository.save(flashcard);
    }

    public Flashcard updateFlashcard(Long id, Flashcard flashcard) {
        flashcard.setId(id);
        return repository.save(flashcard);
    }

    public void deleteFlashcard(Long id) {
        if (id == null) {
            throw new IllegalStateException("Given is null");
        }
        repository.deleteById(id);
    }
}
