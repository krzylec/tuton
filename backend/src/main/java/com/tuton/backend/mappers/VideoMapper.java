package com.tuton.backend.mappers;

import com.tuton.backend.dto.VideoDto;
import com.tuton.backend.model.Video;

public class VideoMapper {

    private VideoMapper() {
    }

    public static VideoDto toDto(Video video) {

        return VideoDto.builder()
                .id(video.getId())
                .url(video.getUrl())
                .build();
    }
}
