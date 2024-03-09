import React, { useEffect, useState } from 'react';
import { fetchFlashcards, handleCreateFlashcard, handleDeleteFlashcard, handleUpdateFlashcard } from '../../handlers/FlashcardHandler';
import { fetchLessons } from '../../handlers/LessonHandler';
import { Input, Button, Label, Select } from '../../components/basic';
import AdminElement from '../../components/custom/AdminElement';

interface FlashcardDto {
    id: number;
    flashcardText: string;
    lessonId: number;
}
interface LessonDto {
    id: number;
    url: string;
    flashcardsList: FlashcardDto[];
}

export default function AdminView(){
    const emptyFlashcardDto: FlashcardDto = {id: 0, flashcardText: "", lessonId: 1};
    const labels: string[] = ["id", "flashcardText", "lessonId"];
    const [flashcards, setFlashcards] = useState<FlashcardDto[]>([]);
    const [newFlashcard, setNewFlashcard] = useState<FlashcardDto>(emptyFlashcardDto);
    const [lessons, setLessons] = useState<LessonDto[]>([])
    const [editRow, setEditRow] = useState(0);
    const [toUpdate, setToUpdate] = useState<FlashcardDto>(emptyFlashcardDto);
    const handleCreateClick = () => {
        handleCreateFlashcard(newFlashcard, setNewFlashcard, setFlashcards);
        setNewFlashcard({id: 0,flashcardText: "", lessonId: 1});
    }
    const handleEditClick = (flashcard: FlashcardDto) => {
        setEditRow(flashcard.id);
        setToUpdate({id: flashcard.id, flashcardText: flashcard.flashcardText, lessonId: flashcard.lessonId});
    }
    const handleUpdateClick =() => {
        console.log(toUpdate);
        handleUpdateFlashcard(toUpdate, setFlashcards);
        setToUpdate(emptyFlashcardDto);
        setEditRow(0);
    }
    const handleEditInputChangeEvent = (e: any) => {
        setToUpdate({...toUpdate, [e.target.name]: e.target.value});
        console.log(toUpdate);
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
                        {
                            //Flashcard dto renders here
                            flashcard.id===editRow ? (
                                //editing row
                                <>
                                    <AdminElement
                                        values={[toUpdate.id, toUpdate.flashcardText, toUpdate.lessonId]}
                                        labels={labels}
                                        onChange={(e)=> handleEditInputChangeEvent(e)}
                                        editFlag={true}
                                    />
                                    <Button
                                        text="update"
                                        onClick={() => handleUpdateClick()}
                                    />  
                                    <Button
                                        text="delete"
                                        onClick={() => handleDeleteFlashcard(flashcard, setFlashcards)}
                                    />
                                </>
                            ) : (
                                //not editing row
                                <>  
                                    <AdminElement
                                        values={[flashcard.id ,flashcard.flashcardText, flashcard.lessonId]}
                                        labels={["id" ,"text", "lessonId"]}
                                        onChange={()=>{}}
                                        editFlag={false}
                                    />
                                    <Button
                                        text="edit"
                                        onClick={() => handleEditClick(flashcard)}
                                    />  
                                    <Button
                                        text="delete"
                                        onClick={() => handleDeleteFlashcard(flashcard, setFlashcards)}
                                    />
                                </>
                            )
                        }
                        </div>
                    </React.Fragment>
                ))
            }
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
                    onClick={() => handleCreateClick()}
                />
            </div>
        </div>
    )
}