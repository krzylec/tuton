package com.tuton.backend.controllers.video;

import com.tuton.backend.model.Video;
import com.tuton.backend.repositories.VideoRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class VideoService {

    private final VideoRepository repository;

    @Value("${videos-path}")
    private String videosPath;

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

    @Transactional
    public List<Video> getAll() {
        return repository.findAll();
    }


    @Transactional
    public void scanFilesDirectory() {

        repository.deleteAll();

        File folder = new File(videosPath);

        if (!folder.isDirectory()) {
            System.err.println("Podana ścieżka nie prowadzi do folderu.");
            return;
        }

        File[] files = folder.listFiles();

        if (files == null || files.length == 0) {
            System.out.println("Folder jest pusty.");
            return;
        }

        List<Video> videos = new ArrayList<>();
        for (File file : files) {
            videos.add(convertToVideo(file));
        }
        log.info("wczytane pliki:" + videos.size());

        repository.saveAll(videos);
    }

    private Video convertToVideo(File file) {

        return Video.builder()
                .id(UUID.randomUUID())
                .location(file.getAbsolutePath())
                .creationDate(LocalDate.now())
                .title(file.getName())
                .build();
    }

    public byte[] readVideo(UUID uuid) throws IOException {

        Video video = repository.findById(uuid).orElseThrow();
        return Files.readAllBytes(new File(video.getLocation()).toPath());
    }
}
