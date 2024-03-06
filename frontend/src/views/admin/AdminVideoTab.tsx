import React, { useEffect, useState } from "react";
import Button from "../../components/basic/Button";
import Label from "../../components/basic/Label";
import { fetchVideos, handleDeleteVideo } from "../../handlers/VideoHandler";

interface VideoDto {
  id: string;
  title: string;
  location: string;
}

export default function AdminView() {
  const [videos, setVideos] = useState<VideoDto[]>([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoPlayer, setVideoPlayer]: any = useState();

  const handleError = () => {};

  useEffect(() => {
    fetchVideos(setVideos);
  }, []);

  const Player = () => {
    return (
      <div className="">
        <video key={videoUrl} controls onError={handleError}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    );
  };

  return (
    <div>
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
                  setVideoUrl(url);
                }}
              />
            </div>
          </React.Fragment>
        ))}
      </ul>
      {videoUrl && <Player />}
    </div>
  );
}
