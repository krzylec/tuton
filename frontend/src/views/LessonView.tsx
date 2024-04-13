import { useParams } from "react-router-dom";
import Flashcard from "../components/custom/Flashcard";
import Player from "../components/custom/Player";
import { useEffect, useState } from "react";
import { LessonDto } from "../Dto";
import { fetchLesson } from "../handlers/LessonHandler";

export default function LessonView() {
  let { lessonId } = useParams();

  const [lesson, setLesson] = useState<LessonDto>();

  useEffect(() => {
    fetchLesson(lessonId).then((r) => {
      console.log(r!.data);
      setLesson(r!.data);
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="">LEKCJA {lessonId}</h1>

      <div className="w-full bg-blue-500 justify-center flex pb-10 pt-5">
        <Player
          key={lessonId}
          url="http://localhost:8080/api/videos/stream/random"
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {lesson?.flashcards &&
          lesson.flashcards.map((flashcard, index) => (
            <Flashcard
              toAnimate={true}
              key={index}
              frontside={`Zawartość fiszki ${flashcard.frontText}`}
              backside={`Zawartość fiszki zmieniona ${flashcard.backText}`}
            />
          ))}
      </div>
    </div>
  );
}
