package com.tuton.backend.controllers.video;

import com.tuton.backend.model.Video;
import com.tuton.backend.repositories.VideoRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
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

    @Transactional
    public List<Video> getAll() {

////        if (videos.isEmpty()) {
        List<Video> videos = scanVideos("backend/src/main/resources/videos");

        List<Video> repositoryAll = repository.findAll();
        List<Video> list = videos
                .stream()
                .filter(video -> !repositoryAll
                        .stream()
                        .map(Video::getLocation)
                        .toList().contains(video.getLocation()))
                .map(repository::save).toList();
////        }
//
        repositoryAll.addAll(list);
        return repositoryAll;


    }

    public byte[] readVideo(UUID uuid) throws IOException {

        Video video = repository.findById(uuid).orElseThrow();
        String[] parts = video.getLocation().split("\\\\");

        // Get the last element
        String lastElement = parts[parts.length - 1];
        Resource resource = new ClassPathResource("videos/"+lastElement);
        return Files.readAllBytes(resource.getFile().toPath());
    }

    private Video searchLocal(UUID uuid) {
        String videosDirectoryPath = "backend/src/main/resources/videos";
        String fileName = uuid.toString() + ".mp4";
        Path filePath = Paths.get(videosDirectoryPath, fileName);

        if (fileExists(filePath)) {
            return Video.builder().location(filePath.toString()).build();
        } else {
            throw new RuntimeException();
        }
    }

    public List<Video> scanVideos(String directoryPath) {
        List<Video> videoLocations = new ArrayList<>();
        File directory = new File(directoryPath);
        if (directory.exists() && directory.isDirectory()) {
            File[] files = directory.listFiles();
            if (files != null) {

                for (File file : files) {
                    if (file.isFile()) {
                        videoLocations.add(Video.builder().id(UUID.randomUUID()).location(file.getAbsolutePath()).creationDate(LocalDate.now()).build());
                    }
                }
            }
        } else {
            log.error("Podany katalog nie istnieje lub nie jest katalogiem.");
        }

        return videoLocations;
    }


    private boolean fileExists(Path filePath) {
        File file = filePath.toFile();
        return file.exists() && file.isFile();
    }
}
