import React, { useEffect, useState } from 'react';
import { fetchFlashcards, handleCreateFlashcard, handleDeleteFlashcard } from '../../handlers/FlashcardHandler';
import { fetchLessons } from '../../handlers/LessonHandler';
import { Input, Button, Label, Select } from '../../components/basic';
import AdminElement from '../../components/custom/AdminElement';

interface FlashcardDto {
    id?: number;
    flashcardText: string;
    lessonId: number;
}
interface LessonDto {
    id: number;
    url: string;
    flashcardsList: FlashcardDto[];
}

export default function AdminView(){
    const [flashcards, setFlashcards] = useState<FlashcardDto[]>([]);
    const [newFlashcard, setNewFlashcard] = useState<FlashcardDto>({flashcardText: "", lessonId: 1});
    const [lessons, setLessons] = useState<LessonDto[]>([])
    const handleCreateEvent = () => {
        handleCreateFlashcard(newFlashcard, setNewFlashcard, setFlashcards);
        setNewFlashcard({flashcardText: "", lessonId: 1});
    }

    useEffect(()=> {
        fetchFlashcards(setFlashcards);
        fetchLessons(setLessons);
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
                                onClick={() => handleDeleteFlashcard(flashcard, setFlashcards)}
                            />
                        </div>
                    </React.Fragment>
            ))}
            </div>
            <div className="flex flex-row p-2 space-x-1">
                <Label
                    text="text:"
                />
                <Input
                    placeholder="flashcard text"
                    value={newFlashcard.flashcardText}
                    onChange={(e) => setNewFlashcard({...newFlashcard, flashcardText: e.target.value})}
                />
                <Label
                    text="lessonId:"
                />
                <Select
                    values={lessons.map(e => e.id)}
                    value={newFlashcard.lessonId}
                    onChange={(e) => setNewFlashcard({...newFlashcard, lessonId: parseInt(e.target.value)})}
                />
                <Button
                    text="Create flashcard"
                    onClick={() => handleCreateEvent()}
                />
            </div>
        </div>
    )
}