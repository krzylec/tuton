import React, { useEffect, useState } from 'react';
import Player from "../../components/custom/Player";
import Button from "../../components/basic/Button";
import Label from "../../components/basic/Label";
import { handleCreateVideo, handleDeleteVideo, fetchVideos } from '../../handlers/VideoHandler';

interface VideoDto {
    id: string;
    title: string;
    location: string;
}

export default function AdminView(){
    const [videos, setVideos] = useState<VideoDto[]>([]);
    const [videoUrl, setVideoUrl] = useState('');
    const [videoPlayer, setVideoPlayer]:any = useState();

    const handleError = () => {
    };
    
    useEffect(() => {
        fetchVideos(setVideos);
    }, []);


    
    return (
      <div>
        <h1>Videos</h1>
        <ul>
          {videos.map((video: VideoDto) => (
            <React.Fragment key={video.id}>
              <div className="flex flex-row items-center">
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
                  text="Poka"
                  onClick={() => {
                    let url =
                      "http://localhost:8080/api/videos/stream/" + video.id;
                    console.log(url);
                    setVideoUrl(url);
                    setVideoPlayer(() => {
                      return (
                        <div className="">
                          <video controls onError={handleError}>
                            <source src={url} type="video/mp4" />
                          </video>
                        </div>
                      );
                    });
                  }}
                />
              </div>
            </React.Fragment>
          ))}
        </ul>
        {videoPlayer}
      </div>
    );
};

