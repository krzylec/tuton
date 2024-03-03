package com.tuton.backend.controllers.lesson;

import java.util.List;

import org.springframework.stereotype.Component;

import com.tuton.backend.dto.LessonDto;
import com.tuton.backend.model.Lesson;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class LessonFacade {

    private final LessonService lessonService;

    public List<LessonDto> getLessonDtosList() {
        return lessonService.getLessonDtosList();
    }

    public LessonDto getLessonDtoById(long id) {
        return lessonService.getLessonDtoById(id);
    }

    public Lesson saveLessonDto(LessonDto lessonDto) {
        return lessonService.saveLessonDto(lessonDto);
    }
}
