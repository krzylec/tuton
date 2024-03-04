package com.tuton.backend.dto;

import jakarta.annotation.Nonnull;
import jakarta.annotation.Nullable;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
public class VideoDto {

    @Id
    private String id;
    private String title;
    private String location;
}
