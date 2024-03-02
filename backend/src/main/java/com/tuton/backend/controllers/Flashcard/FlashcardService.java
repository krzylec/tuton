package com.tuton.backend.controllers.Flashcard;

import org.springframework.stereotype.Service;

import com.tuton.backend.repositories.FlashcardRepository;

@Service
public class FlashcardService {
    FlashcardRepository repository;

    public FlashcardService(FlashcardRepository repository) {
        this.repository = repository;
    }
}
