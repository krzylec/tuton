package com.tuton.backend.controllers.lesson;

import com.tuton.backend.exceptions.custom.IDNotFoundException;
import com.tuton.backend.model.Lesson;
import com.tuton.backend.repositories.LessonRepository;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class LessonService {
    final LessonRepository repository;

    public LessonService(LessonRepository repository) {
        this.repository = repository;
    }

    public List<Lesson> getLessonList() {
        return repository.findAll();
    }

    public Lesson getLessonById(long id) {
        return repository.findById(id)
                .orElseThrow(() -> new IDNotFoundException("Lesson with given ID does not exists"));

    }

    public Lesson saveLesson(Lesson lesson) {
        if (lesson.getId() == null) {
            throw new IDNotFoundException("Lesson with given ID does not exists");
        }
        return repository.save(lesson);
    }

    public Lesson updateLesson(Long id, Lesson lesson) {
        lesson.setId(id);
        return repository.save(lesson);
    }

    public void deleteLesson(Long id) {
        if (id == null) {
            throw new IllegalStateException("Given id is null");
        }
        repository.deleteById(id);
    }
}