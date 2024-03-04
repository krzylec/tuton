import React, {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';

const App: React.FC = () => {
    const [videos, setVideos] = useState<VideoDto[]>([]);
    const [newVideo, setNewVideo] = useState<VideoDto>({id: "", title: '', url: ''});

    useEffect(() => {
        fetchVideos();
    }, []);


    const fetchVideos = async () => {
        try {
            const response = await axios.get("" + "http://localhost:8080/api/videos");
            console.log(response)
            setVideos(response.data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const handleCreateVideo = async () => {
        try {
            await axios.post("" + "http://localhost:8080/api/videos", newVideo);
            setNewVideo({id: "", title: '', url: ''});
            fetchVideos();
        } catch (error) {
            console.error('Error creating video:', error);
        }
    };

    const handleDeleteVideo = async (id: string) => {
        try {
            await axios.delete(`http://localhost:8080/api/videos/${id}`);
            fetchVideos();
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    };

    return (
        <div>
            <h1>Videos</h1>
            <ul>
                {videos.map((video: VideoDto) => (
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label>{video.id} - {video.title}</label>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => handleDeleteVideo(video.id)}>Delete
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
                placeholder="Title"
            />
            <input
                type="text"
                value={newVideo.url}
                onChange={(e) => setNewVideo({...newVideo, url: e.target.value})}
                placeholder="URL"
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleCreateVideo}
            >Create
            </button>
        </div>
    );
};

export default App;

interface VideoDto {
    id: string;
    title: string;
    url: string;
}