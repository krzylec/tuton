package com.tuton.backend.model;

import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "lesson")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String videoPath;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "lesson")
    private List<Flashcard> flashcards;
}
