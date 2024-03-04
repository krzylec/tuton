package com.tuton.backend.controllers.video;

import com.tuton.backend.dto.VideoDto;
import com.tuton.backend.mappers.VideoMapper;
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

        return videoService.getAll().stream().map(VideoMapper::toDto).toList();
    }

    public VideoDto getById(String id) {
        return VideoMapper.toDto(videoService.getById(id));
    }

    public VideoDto save(VideoDto videoDto) {
        return VideoMapper.toDto(videoService.save(VideoMapper.toEntity(videoDto)));
    }

    public VideoDto update(VideoDto updatedVideo) {
        return VideoMapper.toDto(videoService.save(VideoMapper.toEntity(updatedVideo)));
    }

    public void delete(String id) {
        videoService.delete(id);
    }

    public ResponseEntity<byte[]> steam(Long id) throws IOException {
        // Load video file from the classpath
        Resource resource = new ClassPathResource("videos/wideo.mp4");

        // Read the file content
        byte[] videoBytes = Files.readAllBytes(resource.getFile().toPath());

        // Set appropriate headers
        return ResponseEntity.ok()
                .contentType(MediaType.valueOf("video/mp4"))
                .body(videoBytes);
    }
}
