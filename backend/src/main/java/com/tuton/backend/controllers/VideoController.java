package com.tuton.backend.controllers;

import com.tuton.backend.dto.VideoDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class VideoController {

    private final VideoFacade videoFacade;

    @GetMapping("/hello")
    String hello() {
        return "Hello, World!";
    }

    @GetMapping("/video")
    List<VideoDto> readAllVideos() {
        return videoFacade.getVideoList();
    }
}