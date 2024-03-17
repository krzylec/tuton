package com.tuton.backend.configuration;

import com.tuton.backend.controllers.video.VideoService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer {

    private final VideoService videoService;
    @PostConstruct
    public void initializeData() {
        videoService.scanFilesDirectory();
    }
}
