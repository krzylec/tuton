import { Button, Input } from "../../components/basic";
import Flashcard from "../../components/custom/Flashcard";

export default function AdminView(){

    return (
        <div className="flex space-y-2 flex-col p-2 bg-secondary-light border border-gray-600">
            <div className="flex">
                <div className="h-96 grid grid-cols-5 p-2 gap-1 bg-secondary border border-gray-600 overflow-y-scroll">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((index) => (
                    <Flashcard
                    key={index}
                    frontside={`Zawartość fiszki ${index}`}
                    backside={`Zawartość fiszki zmieniona ${index}`}
                    editable={true}
                    />
                ))}
                </div>
                <div className="p-2 border border-gray-600">
                    Create lesson
                    <Input
                        placeholder="id"
                        />
                    <Input
                        placeholder="ile fiszek"
                    />
                    <Input
                        placeholder="cosj eszcze nie chce mi sie patrzec"
                    />
                    <Input
                        placeholder="cosj eszcze nie chce mi sie patrzec"
                    />
                    <Button
                        text="submit"
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="flex justify-center p-4 border border-gray-600">
                    placeholder jakis tam
                </div>
                <div className="flex justify-center p-4 border border-gray-600">
                    placeholder jakis tam
                </div>
            </div>
        </div>
    )
}