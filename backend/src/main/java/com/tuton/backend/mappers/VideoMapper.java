package com.tuton.backend.mappers;

import com.tuton.backend.dto.VideoDto;
import com.tuton.backend.model.Video;

public class VideoMapper {

    Video toEntity(VideoDto video){
        return Video.builder().build();
    }

    VideoDto toDto(Video video){
        return VideoDto.builder().build();
    }
}
