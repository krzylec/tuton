package com.tuton.backend.mappers;

import com.tuton.backend.dto.VideoDto;
import com.tuton.backend.model.Video;

import java.util.UUID;

public class VideoMapper {

    public static Video toEntity(VideoDto videoDto) {
        Video video = new Video();
        video.setId(parseUUID(videoDto.getId()));
        video.setLocation(videoDto.getLocation());
        video.setTitle(videoDto.getTitle());
        return video;
    }

    public static VideoDto toDto(Video video) {
        return VideoDto.builder()
                .id(video.getId().toString())
                .location(video.getLocation())
                .title(video.getTitle())
                .build();
    }

    private static UUID parseUUID(String mString) {
        return mString == null || mString.isEmpty() ? null : UUID.fromString(mString);
    }
}
