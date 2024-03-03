package com.tuton.backend.controllers.lesson;

import com.tuton.backend.dto.LessonDto;
import com.tuton.backend.model.Lesson;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController()
@RequestMapping("/lessons")
@RequiredArgsConstructor
public class LessonController {

    private final LessonFacade lessonFacade;

    @GetMapping("")
    List<LessonDto> readAllLessonsdDtos() {
        return lessonFacade.getLessonDtosList();
    }

    @GetMapping("/{id}")
    public LessonDto getMethodName(@PathVariable long id) {
        return lessonFacade.getLessonDtoById(id);
    }

    @PostMapping("")
    public Lesson postMethodName(@RequestBody LessonDto lessondtDto) {
        return lessonFacade.saveLessonDto(lessondtDto);
    }
}