package com.tuton.backend.controllers.Lesson;

import java.util.List;

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
}
