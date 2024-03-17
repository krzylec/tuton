package com.tuton.backend.model;

import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "lesson")
@Builder
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String videoPath;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "lesson")
    private List<Flashcard> flashcards;
}
