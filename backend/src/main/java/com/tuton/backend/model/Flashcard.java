package com.tuton.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "flashcard")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Flashcard {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String frontText;
    private String backText;
    private LocalDateTime creationDate;
    private LocalDateTime modificationDate;
    @ManyToOne
    @JoinColumn(name = "lesson_id")
    private Lesson lesson;
}