package com.tuton.backend.model;

import java.util.List;

import org.springframework.validation.annotation.Validated;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name = "lesson")
@Builder
@Data
@Validated
@lombok.NonNull
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String url;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "lesson")
    private List<Flashcard> flashcards;
}
