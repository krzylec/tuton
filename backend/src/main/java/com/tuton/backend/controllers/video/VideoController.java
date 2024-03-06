package com.tuton.backend.controllers.video;

import com.tuton.backend.dto.VideoDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/videos")
@RequiredArgsConstructor
public class VideoController {

    private final VideoFacade videoFacade;

    @GetMapping("/stream/{id}")
    public ResponseEntity<byte[]> getExampleVideo(@PathVariable String id) throws IOException {

        return videoFacade.streamRandom(id);
    }

    @GetMapping("/stream/random")
    public ResponseEntity<byte[]> getExampleVideo() throws IOException {

        return videoFacade.streamRandom();
    }

    @GetMapping
    public List<VideoDto> getAllVideos() {
        return videoFacade.getAll();
    }

    @GetMapping("/{uuid}")
    public VideoDto getVideoById(@PathVariable String uuid) {
        return videoFacade.getById(uuid);
    }

    @PostMapping
    public VideoDto createVideo(@RequestBody VideoDto video) {
        return videoFacade.save(video);
    }

    @PutMapping
    public VideoDto updateVideo(@RequestBody VideoDto updatedVideo) {
        return videoFacade.update(updatedVideo);

    }

    @DeleteMapping("/{id}")
    public void deleteVideo(@PathVariable String id) {
        videoFacade.delete(id);
    }
}
