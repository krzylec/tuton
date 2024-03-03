package com.tuton.backend.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class VideoDto {

    Long id;
    LocalDate creationDate;
}
