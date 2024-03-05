import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Player from "./../components/custom/Player";
import { handleCreateVideo, handleDeleteVideo, fetchVideos } from './../handlers/VideoHandler';

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
                    <div className="grid grid-cols-1 gap-4">
                        <div className="mb-2">
                            <label className="mr-5">{video.id} - {video.title} - {video.location}</label>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => handleDeleteVideo(video.id, fetchVideos, setVideos)}>Delete
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => {
                                    let url = 'http://localhost:8080/api/videos/stream/' + video.id;
                                    console.log(url)
                                    setVideoUrl(url)
                                }
                                }>Poka
                            </button>
                        </div>
                    </div>
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
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => handleCreateVideo(newVideo, setNewVideo, setVideos)}>
                Create
            </button>
            <Player url={videoUrl}/>
        </div>
    );
};

