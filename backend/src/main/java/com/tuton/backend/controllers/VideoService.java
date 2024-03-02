package com.tuton.backend.controllers;

import com.tuton.backend.repositories.VideoRepository;
import org.springframework.stereotype.Service;

@Service
public class VideoService {
    VideoRepository repository;

    public VideoService(VideoRepository repository) {
        this.repository = repository;
    }
}