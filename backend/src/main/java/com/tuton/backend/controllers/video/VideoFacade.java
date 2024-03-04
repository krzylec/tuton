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
import java.util.List;
import java.util.UUID;

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

    public ResponseEntity<byte[]> stream(String id) throws IOException {
        byte[] videoBytes = videoService.readVideo(UUID.fromString(id));

        return ResponseEntity.ok()
                .contentType(MediaType.valueOf("video/mp4"))
                .body(videoBytes);
    }
}
