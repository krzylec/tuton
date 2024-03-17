import axios from "axios";

export const fetchVideos = async (
  setVideos: React.Dispatch<React.SetStateAction<VideoDto[]>>,
) => {
  try {
    const response = await axios.get("http://localhost:8080/api/videos");
    console.log(response);
    setVideos(response.data);
  } catch (error) {
    console.error("Error fetching videos:", error);
  }
};

export const handleCreateVideo = async (
  newVideo: VideoDto,
  setNewVideo: React.Dispatch<React.SetStateAction<VideoDto>>,
  toFetch: React.Dispatch<React.SetStateAction<VideoDto[]>>,
) => {
  try {
    await axios.post("http://localhost:8080/api/videos", newVideo);
    setNewVideo({ id: "", title: "", location: "" });
    fetchVideos(toFetch);
  } catch (error) {
    console.error("Error creating video:", error);
  }
};

export const handleDeleteVideo = async (
  id: string,
  fetchVideos: (
    setVideos: React.Dispatch<React.SetStateAction<VideoDto[]>>,
  ) => Promise<void>,
  setVideos: React.Dispatch<React.SetStateAction<VideoDto[]>>,
) => {
  try {
    await axios.delete(`http://localhost:8080/api/videos/${id}`);
    fetchVideos(setVideos);
  } catch (error) {
    console.error("Error deleting video:", error);
  }
};

interface VideoDto {
  id: string;
  title: string;
  location: string;
}
