package com.tuton.backend.controllers.lesson;

import com.tuton.backend.dto.LessonDto;
import com.tuton.backend.mappers.LessonMapper;
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

    public List<LessonDto> getLessonDtosList() {
        return repository.findAll().stream()
                .map(e -> new LessonMapper().toDto(e))
                .toList();
    }

    public LessonDto getLessonDtoById(long id) {
        return repository.findById(id).map(e -> new LessonMapper().toDto(e)).orElseThrow();
    }

    @SuppressWarnings("null")
    public Lesson saveLessonDto(LessonDto lessonDto) {
        return repository.save(new LessonMapper().toEntity(lessonDto));
    }

}