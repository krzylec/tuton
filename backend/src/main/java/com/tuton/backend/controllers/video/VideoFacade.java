package com.tuton.backend.controllers.video;

import com.tuton.backend.dto.VideoDto;
import com.tuton.backend.mappers.VideoMapper;
import com.tuton.backend.model.Video;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;
import java.util.Random;
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

    public ResponseEntity<byte[]> streamRandom(String id) throws IOException {
        byte[] videoBytes = videoService.readVideo(UUID.fromString(id));

        return ResponseEntity.ok()
                .contentType(MediaType.valueOf("video/mp4"))
                .body(videoBytes);
    }

    public ResponseEntity<byte[]> streamRandom() throws IOException {

        List<Video> givenList = videoService.getAll();
        Random rand = new Random();
        Video randomElement = givenList.get(rand.nextInt(givenList.size()));

        byte[] videoBytes = videoService.readVideo(randomElement.getId());

        return ResponseEntity.ok()
                .contentType(MediaType.valueOf("video/mp4"))
                .body(videoBytes);
    }

    public void fetchVideos() {
        videoService.scanFilesDirectory();
    }
}
