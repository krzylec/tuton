import { fetchVideos } from "../handlers/VideoHandler";
import { useEffect, useState } from "react";
import { VideoDto } from "../Dto";
import { Button } from "../components/basic";
import { Link } from "react-router-dom";

interface TileListProps {
  labelList: string[];
}

export default function ListView() {
  const [labelList, setLabelList] = useState<VideoDto[]>([]);

  useEffect(() => {
    fetchVideos(setLabelList);
  }, []);
  return (
    <div className="grid grid-cols-5 gap-4 ml-16 mr-16">
      {labelList.map((video) => (
        <Link
          to={"/lesson/" + video.id}
          key={video.id}
          className="bg-gray-200 hover:border hover:border-amber-950 font- overflow-hidden  h-28 w-40 p-4 rounded-md text-center"
        >
          <p className="text-lg font-bold">{video.id.split("-").pop()}</p>
          <p className="text-base">{video.title}</p>
        </Link>
      ))}
    </div>
  );
}
