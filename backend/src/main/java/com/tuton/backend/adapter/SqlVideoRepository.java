package com.tuton.backend.adapter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tuton.backend.model.Video;
import com.tuton.backend.model.VideoRepository;

@Repository
public interface SqlVideoRepository extends VideoRepository, JpaRepository<Video, Integer> {

}
