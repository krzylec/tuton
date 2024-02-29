import Fiszka from "./Fiszka"
import Player from "./Player"
import Whiteboard from "./WhiteBoard"

export default function WideoView() {

    return (

        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 rotate">
            <div className="w-full bg-blue-500 text-white p-4">
                <Player />
            </div>

            <div className="flex flex-wrap justify-center">
                <div className="flex flex-nowrap">
                    {[1, 2, 3, 4].map((index) => (
                        <Fiszka key={index} title={`Fiszka ${index}`} content={`Zawartość fiszki ${index}`} />
                    ))}
                </div>

                <div className="flex flex-nowrap">
                    {[5, 6, 7, 8].map((index) => (
                        <Fiszka key={index} title={`Fiszka ${index}`} content={`Zawartość fiszki ${index}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}