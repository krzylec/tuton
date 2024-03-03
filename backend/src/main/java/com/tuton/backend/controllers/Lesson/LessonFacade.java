package com.tuton.backend.controllers.Lesson;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.tuton.backend.dto.LessonDto;
import com.tuton.backend.mappers.LessonMapper;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class LessonFacade {

    private final LessonService lessonService;

    public List<LessonDto> getLessonList() {
        return lessonService.repository.findAll().stream()
                .map(LessonMapper::toDto)
                .toList();
    }

    public Optional<LessonDto> getLessonDtoById(long id) {
        return lessonService.repository.findById(id).map(LessonMapper::toDto);
    }

}
