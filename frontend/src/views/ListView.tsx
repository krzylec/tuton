import { fetchVideos } from "../handlers/VideoHandler";
import { useEffect, useState } from "react";
import { LessonDto, VideoDto } from "../Dto";
import { Button } from "../components/basic";
import { Link } from "react-router-dom";
import { fetchLessons } from "../handlers/LessonHandler";

interface TileListProps {
  labelList: string[];
}

export default function ListView() {
  const [lessons, setLessons] = useState<LessonDto[]>([]);

  useEffect(() => {
    fetchLessons(setLessons);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 gap-4  ml-16 mr-16">
        {lessons.map((lesson) => (
          <Link
            to={"/lesson/" + lesson.id}
            key={lesson.id}
            className="bg-tertiary-light hover:bg-tertiary-dark hover:bg-opacity-90 border hover:border-blue-500 font-serif overflow-hidden h-32 w-44 p-4 rounded-md text-center transition duration-300 ease-in-out"
          >
            <p className="text-lg font-bold">{lesson.description}</p>
            <p className="text-xs">{lesson.creationDate.replace("T", " ")}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
