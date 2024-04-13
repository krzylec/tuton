package com.tuton.backend.controllers.flashcard;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.tuton.backend.exceptions.custom.IDNotFoundException;
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
        flashcard.setCreationDate(LocalDateTime.now());
        return repository.save(flashcard);
    }

    public Flashcard updateFlashcard(Flashcard flashcard) {
        Flashcard byId = repository.findById(flashcard.getId()).orElseThrow();
        byId.setBackText(flashcard.getBackText());
        byId.setFrontText(flashcard.getFrontText());
        byId.setModificationDate(LocalDateTime.now());
        return repository.save(byId);
    }

    public void deleteFlashcard(Long id) {
        repository.deleteById(id);
    }
}
