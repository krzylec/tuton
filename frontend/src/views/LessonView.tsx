import { useParams } from "react-router-dom";
import Flashcard from "../components/custom/Flashcard";
import Player from "../components/custom/Player";

export default function LessonView() {
  let { lessonId } = useParams();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="">LEKCJA {lessonId}</h1>

      <div className="w-full bg-blue-500 justify-center flex pb-10 pt-5">
        <Player url="http://localhost:8080/api/videos/stream/random" />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
          <Flashcard
            toAnimate={true}
            key={index}
            frontside={`Zawartość fiszki ${index}`}
            backside={`Zawartość fiszki zmieniona ${index}`}
          />
        ))}
      </div>
    </div>
  );
}
