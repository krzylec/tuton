import React, { useEffect, useState } from "react";
import Button from "../../components/basic/Button";
import Label from "../../components/basic/Label";
import { fetchVideos, handleDeleteVideo } from "../../handlers/VideoHandler";
import axios from "axios";

interface VideoDto {
  id: string;
  title: string;
  location: string;
}

export default function AdminView() {
  const [videos, setVideos] = useState<VideoDto[]>([]);
  const [newVideo, setNewVideo] = useState<VideoDto>({
    id: "",
    title: "",
    location: "",
  });
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    fetchVideos(setVideos);
  }, []);

  const handleError = () => {};

  const VideoPlayer = () => {
    return (
      <div className="">
        <video key={videoUrl} controls onError={handleError}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 content-center justify-center">
      <Button
        text={"Refresh"}
        onClick={() => {
          axios
            .get("http://localhost:8080/api/videos/fetch-videos")
            .then(() => fetchVideos(setVideos));
        }}
      />
      {videoUrl && <VideoPlayer />}
      <ul>
        {videos.map((video: VideoDto) => (
          <React.Fragment key={video.id}>
            <div className="flex flex-row gap-x-3 items-center justify-center mb-2">
              <Label
                text={video.id + " - " + video.title + " - " + video.location}
              />
              <Button
                text="Delete"
                onClick={() =>
                  handleDeleteVideo(video.id, fetchVideos, setVideos)
                }
              />
              <Button
                text="Show"
                onClick={() => {
                  let url =
                    "http://localhost:8080/api/videos/stream/" + video.id;
                  console.log(url);
                  setVideoUrl(url);
                }}
              />
            </div>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
