package com.tuton.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tuton.backend.model.Flashcard;

public interface FlashcardRepository extends JpaRepository<Flashcard, Long> {

}
