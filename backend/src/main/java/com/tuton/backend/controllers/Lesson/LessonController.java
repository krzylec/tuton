package com.tuton.backend.controllers.lesson;

import com.tuton.backend.dto.LessonDto;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController()
@RequestMapping("/lesson")
@RequiredArgsConstructor
public class LessonController {

    private final LessonFacade lessonFacade;

    @GetMapping("")
    List<LessonDto> getAllLessons() {
        return lessonFacade.getLessonList();
    }

    @GetMapping("/{id}")
    public LessonDto getLesson(@PathVariable long id) {
        return lessonFacade.getLessonById(id);
    }

    @PostMapping("")
    public LessonDto saveLesson(@RequestBody LessonDto lessonDto) {
        return lessonFacade.saveLesson(lessonDto);
    }

    @PutMapping("/{id}")
    public LessonDto updateLesson(@PathVariable Long id, @RequestBody LessonDto updatedLesson) {
        return lessonFacade.updateLesson(id, updatedLesson);
    }

    @DeleteMapping("/{id}")
    public void deleteLesson(@PathVariable Long id) {
        lessonFacade.deleteLesson(id);
    }
}