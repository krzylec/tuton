import Fiszka from "./Flashcard";
import Player from "./Player";
import Whiteboard from "./WhiteBoard";

export default function VideoView() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full bg-blue-500 justify-center flex pb-10 pt-5">
        <Player />
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="flex flex-nowrap">
          {[1, 2, 3, 4].map((index) => (
            <Fiszka
              key={index}
              title={`Fiszka ${index}`}
              content={`Zawartość fiszki ${index}`}
              contentFlipped={`Zawartość fiszki zmieniona ${index}`}
            />
          ))}
        </div>

        <div className="flex flex-nowrap">
          {[5, 6, 7, 8].map((index) => (
            <Fiszka
              key={index}
              title={`Fiszka ${index}`}
              content={`Zawartość fiszki ${index}`}
              contentFlipped={`Zawartość fiszki zmieniona ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
