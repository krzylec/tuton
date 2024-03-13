import Fiszka from "../components/custom/Flashcard";
import Player from "../components/custom/Player";

export default function LessonView() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full bg-blue-500 justify-center flex pb-10 pt-5">
        <Player url="http://localhost:8080/api/videos/stream/random" />
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="flex flex-nowrap">
          {[1, 2, 3, 4].map((index) => (
            <Fiszka
              key={index}
              frontside={`Zawartość fiszki ${index}`}
              backside={`Zawartość fiszki zmieniona ${index}`}
            />
          ))}
        </div>

        <div className="flex flex-nowrap">
          {[5, 6, 7, 8].map((index) => (
            <Fiszka
              key={index}
              frontside={`Zawartość fiszki ${index}`}
              backside={`Zawartość fiszki zmieniona ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
