package com.tuton.backend.controllers.Lesson;

import com.tuton.backend.repositories.LessonRepository;
import org.springframework.stereotype.Service;

@Service
public class LessonService {
    LessonRepository repository;

    public LessonService(LessonRepository repository) {
        this.repository = repository;
    }
}