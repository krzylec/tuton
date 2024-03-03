package com.tuton.backend.controllers.video;

import com.tuton.backend.dto.VideoDto;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class VideoFacade {

    private final VideoService videoService;

    public List<VideoDto> getAll() {

        //todo
        return new ArrayList<>();
    }

    public VideoDto getById(Long id) {
        //todo
        return VideoDto.builder()
                .id(id)
                .creationDate(LocalDate.now())
                .build();
    }

    public VideoDto save(VideoDto video) {
        //todo
        return null;
    }

    public VideoDto update(VideoDto updatedVideo) {
        //todo
        return null;
    }

    public void delete(Long id) {
        //todo
    }

    public ResponseEntity<byte[]> steam(Long id) throws IOException {
        // Load video file from the classpath
        Resource resource = new ClassPathResource("wideo.mp4");

        // Read the file content
        byte[] videoBytes = Files.readAllBytes(resource.getFile().toPath());

        // Set appropriate headers
        return ResponseEntity.ok()
                .contentType(MediaType.valueOf("video/mp4"))
                .body(videoBytes);
    }
}
