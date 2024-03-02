package com.tuton.backend.model;

import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "lessons")
@Getter
@Setter
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String url;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "lesson")
    private List<Flashcard> flashcards;
}
