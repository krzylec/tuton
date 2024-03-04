package com.tuton.backend.controllers.video;

import com.tuton.backend.model.Video;
import com.tuton.backend.repositories.VideoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class VideoService {

    private final VideoRepository repository;

    public Video save(Video videoIn) {
        if (videoIn.getId() == null) {
            videoIn.setId(UUID.randomUUID());
            videoIn.setCreationDate(LocalDate.now());
            return repository.save(videoIn);
        }
        Video video = repository.findById(videoIn.getId()).orElseThrow();
        video.setLocation(video.getLocation());
        video.setTitle(video.getTitle());

        return repository.save(video);
    }

    public void delete(String id) {
        UUID uuid = UUID.fromString(id);
        repository.deleteById(uuid);
    }

    public Video getById(String id) {
        UUID uuid = UUID.fromString(id);
        return repository.findById(uuid).orElseThrow();
    }

    public List<Video> getAll() {
        return repository.findAll();
    }

    public byte[] readVideo(UUID uuid) throws IOException {

        Video video = repository.findById(uuid).orElseThrow();
        Resource resource = new ClassPathResource(video.getLocation());
        return Files.readAllBytes(resource.getFile().toPath());

    }
}
