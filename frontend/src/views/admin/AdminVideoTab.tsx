import React, { useEffect, useState } from "react";
import Button from "../../components/basic/Button";
import Label from "../../components/basic/Label";
import { fetchVideos, handleDeleteVideo } from "../../handlers/VideoHandler";
import axios from "axios";
import { VideoDto } from "../../Dto";

export default function AdminView() {
  const [videos, setVideos] = useState<VideoDto[]>([]);
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

  interface TestProps {
    id: string;
  }

  const Buttons = ({ id }: TestProps) => (
    <div className="flex flex-row space-x-0.5">
      <Button
        text="Delete"
        onClick={() => handleDeleteVideo(id, fetchVideos, setVideos)}
      />
      <Button
        text="Show"
        onClick={() => {
          let url = "http://localhost:8080/api/videos/stream/" + id;
          console.log(url);
          setVideoUrl(url);
        }}
      />
    </div>
  );

  function getLabel(video: VideoDto) {
    return (
      <Label
        text={
          video.id.split("-").at(0) +
          " - " +
          video.title +
          " - " +
          video.location.split("\\").pop()
        }
      />
    );
  }

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
      <ul className="">
        {videos.map((video: VideoDto) => (
          <div
            key={video.id}
            className="border p-1 border-gray-600 m-1 rounded"
          >
            <div className="flex flex-row items-center justify-between">
              {getLabel(video)}
              <Buttons id={video.id} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
