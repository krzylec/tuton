package com.tuton.backend.controllers;

import com.tuton.backend.dto.VideoDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class VideoFacade {

    private final VideoService videoService;

    public List<VideoDto> getVideoList() {


//        stream po video z VideoMapper.toDto
        //todo
        return null;
    }
}

