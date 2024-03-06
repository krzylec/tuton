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
    const [newVideo, setNewVideo] = useState<VideoDto>({id: "", title: '', location: ''});
    const [videoUrl, setVideoUrl] = useState('');

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
                                text={video.id + ' - ' + video.title + ' - ' + video.location}
                                />
                            <Button
                                text="Delete"
                                onClick={() => handleDeleteVideo(video.id, fetchVideos, setVideos)}
                            /> 
                            <Button
                                text="Poka"
                                onClick={() => {
                                    let url = 'http://localhost:8080/api/videos/stream/' + video.id;
                                    console.log(url)
                                    setVideoUrl(url)
                                    }}
                            />
                        </div>
                    </React.Fragment>
                ))}
            </ul>
            <h2>Create Video</h2>
            <input
                type="text"
                value={newVideo.title}
                onChange={(e) => setNewVideo({...newVideo, title: e.target.value})}
                placeholder="Tytył"
            />
            <input
                type="text"
                value={newVideo.location}
                onChange={(e) => setNewVideo({...newVideo, location: e.target.value})}
                placeholder="videos/wideo1.mp4"
            />
            <Button
                text="Create video"
                type="button"
                onClick={() => handleCreateVideo(newVideo, setNewVideo, setVideos)}
            />
            <Player url={videoUrl}/>
        </div>
    );
};

