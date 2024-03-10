package com.tuton.backend.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.tuton.backend.controllers.lesson.LessonService;
import com.tuton.backend.exceptions.custom.IDNotFoundException;
import com.tuton.backend.model.Lesson;
import com.tuton.backend.repositories.LessonRepository;

@ExtendWith(MockitoExtension.class)
class LessonServiceTest {

    @Mock
    private LessonRepository lessonRepository;

    @InjectMocks
    private LessonService lessonService;

    @Test
    void testFindById_IdFound() {
        when(lessonRepository.findById(1L)).thenReturn(Optional.of(new Lesson(1L, "http://example.com", null)));
        Lesson lesson = lessonService.getLessonById(1L);
        assertEquals("http://example.com", lesson.getUrl());
    }

    @Test
    void testFindById_IdNotFound() {
        when(lessonRepository.findById(1L)).thenReturn(Optional.empty());
        assertThrows(IDNotFoundException.class, () -> {
            lessonService.getLessonById(1L);
        });
    }
}
