import React, { useEffect, useState } from 'react';
import { fetchFlashcards, handleCreateFlashcard, handleDeleteFlashcard, handleUpdateFlashcard } from '../../handlers/FlashcardHandler';
import { Input, Button } from '../../components/basic';
import { AdminElement, inputValues }  from '../../components/custom/AdminElement';

interface FlashcardDto {
    id: number;
    flashcardText: string;
    lessonId: number;
}

export default function AdminView(){
    const [flashcards, setFlashcards] = useState<FlashcardDto[]>([]);
    const [newFlashcard, setNewFlashcard] = useState<FlashcardDto>({id: 0,flashcardText: "", lessonId: 1});
    const [flashcardToUpdate, setFlashcardToUpdate] = useState<FlashcardDto>({id: 0,flashcardText: "", lessonId: 1});
    const [editRow, setEditRow] = useState<number>(0);
    const handleEditRow = (id: number) => {
        setEditRow(id);
    }
    const handleUpdate = (flashcard: FlashcardDto) => {
        setEditRow(0);
        setFlashcardToUpdate({id: inputValues.at(0), flashcardText: inputValues.at(1), lessonId: inputValues.at(2)});
        handleUpdateFlashcard(flashcardToUpdate, setFlashcards);
    }

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
                                    {
                                        editRow===flashcard.id && (
                                        <>
                                        <AdminElement
                                            values={[flashcard.id ,flashcard.flashcardText, flashcard.lessonId]}
                                            labels={["id" ,"text", "lessonId"]}
                                            editableFlag={true}
                                        />
                                        <Button
                                            text="update"
                                            onClick={() => handleUpdate(flashcard)}
                                        />  
                                        </>
                                        )
                                    }
                                    {
                                        editRow!==flashcard.id && (
                                            <>
                                            <AdminElement
                                                values={[flashcard.id ,flashcard.flashcardText, flashcard.lessonId]}
                                                labels={["id" ,"text", "lessonId"]}
                                            />
                                            <Button
                                                text="edit"
                                                onClick={() => handleEditRow(flashcard.id)}
                                            />
                                            </>
                                        )
                                    }
                                    

                                    <Button
                                        text="delete"
                                        onClick={() => handleDeleteFlashcard(flashcard, setFlashcards)}
                                    />
                                </div>
                    </React.Fragment>
            ))}
            </div>
            <div className="flex flex-row p-2 space-x-1">
                <Input
                    placeholder="flashcard text"
                    value={newFlashcard.flashcardText}
                    onChange={(e) => setNewFlashcard({...newFlashcard, flashcardText: e.target.value})}
                />
                <Input
                    placeholder="lesson id"
                    pattern="[0-9]*"
                    required={true}
                    value={newFlashcard.lessonId}
                    onChange={(e) => setNewFlashcard({...newFlashcard, flashcardText: e.target.value})}
                />
                <Button
                    text="Create flashcard"
                    onClick={() => handleCreateFlashcard(newFlashcard, setNewFlashcard, setFlashcards)}
                />
            </div>
        </div>
    )
}