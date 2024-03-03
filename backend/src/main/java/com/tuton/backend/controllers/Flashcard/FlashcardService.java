package com.tuton.backend.controllers.flashcard;

import org.springframework.stereotype.Service;

import com.tuton.backend.repositories.FlashcardRepository;

@Service
public class FlashcardService {
    FlashcardRepository repository;

    public FlashcardService(FlashcardRepository repository) {
        this.repository = repository;
    }
}
