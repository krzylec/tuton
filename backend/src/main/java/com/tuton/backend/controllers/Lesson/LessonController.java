package com.tuton.backend.controllers.Lesson;

import com.tuton.backend.dto.LessonDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class LessonController {

    private final LessonFacade lessonFacade;

    @GetMapping("/hello")
    public String hello() {
        return "Hello World!";
    }

    @GetMapping("/lessons")
    List<LessonDto> readAllLessonsdDtos() {
        return lessonFacade.getLessonList();
    }

    // @GetMapping("/lesson/{id}")
    // public String getMethodName(@PathVariable long id) {
    // return null;
    // }

}