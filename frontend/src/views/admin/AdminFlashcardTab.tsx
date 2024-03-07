import React, { useEffect, useState } from 'react';
import { fetchFlashcards, handleCreateFlashcard } from '../../handlers/FlashcardHandler';
import AdminElement from '../../components/custom/AdminElement'
import { Input, Button } from '../../components/basic';
import { handleDeleteVideo } from '../../handlers/VideoHandler';

interface FlashcardDto {
    id: number;
    flashcardText: string;
    lessonId: number;
}

export default function AdminView(){
    const [flashcards, setFlashcards] = useState<FlashcardDto[]>([]);
    const [newFlashcard, setNewFlashcard] = useState<FlashcardDto>({id: 0, flashcardText: "", lessonId: 0});

    useEffect(()=> {
        fetchFlashcards(setFlashcards);
    }, []);

    return (
        <div>
            <div className="overflow-auto h-80">
            {
                flashcards.map((flashcard: FlashcardDto) => (
                    <React.Fragment key={flashcard.id}>
                        <div className="flex flex-row justify-center items-center space-x-1 border border-black p-1">
                            <AdminElement
                                values={[flashcard.id ,flashcard.flashcardText, flashcard.lessonId]}
                                labels={["id" ,"text", "lessonId"]}
                            />
                            <Button
                                text="edit"
                            />
                            <Button
                                text="delete"
                            />
                        </div>
                    </React.Fragment>
            ))}
            </div>
            <div className="flex flex-row p-2 space-x-1">
                <Input
                    placeholder="flashcard text"
                />
                <Input
                    placeholder="lesson id"
                    pattern="[0-9]*"
                    required={true}
                />
                <Button
                    text="Create flashcard"
                    onClick={() => handleCreateFlashcard(newFlashcard, setNewFlashcard, setFlashcards)}
                />
            </div>
        </div>
    )
}