package com.tuton.backend.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tuton.backend.model.Video;
import com.tuton.backend.model.VideoRepository;

@RestController
public class VideoController {
    private final VideoRepository repository;

    public VideoController(VideoRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/hello")
    String hello() {
        return "Hello, World!";
    }

    @GetMapping("/video")
    List<Video> readAllVideos() {
        return repository.findAll();
    }

}