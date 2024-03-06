package com.tuton.backend.dto;

import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class VideoDto {

    @Id
    private String id;
    private String title;
    private String location;
}
