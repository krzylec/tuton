package com.tuton.backend.controllers.lesson;

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
        return new LessonMapper().toDto(lessonService.getLessonList());
    }

    public LessonDto getLessonById(long id) {
        return new LessonMapper().toDto(lessonService.getLessonById(id).orElseThrow());
    }

    public LessonDto saveLesson(LessonDto lessonDto) {
        return new LessonMapper().toDto(lessonService.saveLesson(new LessonMapper().toEntity(lessonDto)));
    }

    public LessonDto updateLesson(Long id, LessonDto lessonDto) {
        return new LessonMapper().toDto(lessonService.updateLesson(id, new LessonMapper().toEntity(lessonDto)));
    }

    public void deleteLesson(Long id) {
        lessonService.deleteLesson(id);
    }

}
