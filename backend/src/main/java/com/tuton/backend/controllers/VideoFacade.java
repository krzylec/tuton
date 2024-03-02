package com.tuton.backend.controllers;

import java.util.List;

import org.springframework.stereotype.Component;

import com.tuton.backend.dto.VideoDto;
import com.tuton.backend.mappers.VideoMapper;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class VideoFacade {

    private final VideoService videoService;

    public List<VideoDto> getVideoList() {
        return videoService.repository.findAll().stream()
                .map(VideoMapper::toDto)
                .toList();
    }
}
