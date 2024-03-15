import React, { useEffect, useState } from 'react';
import { fetchFlashcards, handleCreateFlashcard, handleDeleteFlashcard, handleUpdateFlashcard } from '../../handlers/FlashcardHandler';
import { fetchLessons } from '../../handlers/LessonHandler';
import { Input, Button, Label, Select } from '../../components/basic';
import AdminElement from '../../components/custom/AdminElement';
import { FlashcardDto } from '../../Dto';

interface LessonDto {
    id: number;
    url: string;
    flashcardsList: FlashcardDto[];
}

export default function AdminView(){
    const emptyFlashcardDto: FlashcardDto = {id: 0, frontText: "", backText: "", lessonId: 1};
    const labels: string[] = ["id", "frontText", "backText", "lessonId"];
    //Array of flashcards to render in AdminElement
    const [flashcards, setFlashcards] = useState<FlashcardDto[]>([]);
    const [newFlashcard, setNewFlashcard] = useState<FlashcardDto>(emptyFlashcardDto);
    //Array of lessons for select input while creating flashcard
    const [lessons, setLessons] = useState<LessonDto[]>([])
    //editRow is a flashcard id number of editable row
    const [editRow, setEditRow] = useState(0);
    const [toUpdate, setToUpdate] = useState<FlashcardDto>(emptyFlashcardDto);
    const handleCreateOnClick = () => {
        handleCreateFlashcard(newFlashcard, setNewFlashcard, setFlashcards);
        setNewFlashcard({id: 0, frontText: "", backText: "", lessonId: 1});
    }
    const handleEditOnClick = (flashcard: FlashcardDto) => {
        setEditRow(flashcard.id);
        setToUpdate({id: flashcard.id, frontText: flashcard.frontText, backText: flashcard.backText, lessonId: flashcard.lessonId});
    }
    const handleUpdateOnClick =() => {
        console.log(toUpdate);
        handleUpdateFlashcard(toUpdate, setFlashcards);
        setToUpdate(emptyFlashcardDto);
        setEditRow(0);
    }
    const handleEditChangeEvent = (e: any) => {
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
                                        values={[toUpdate.id, toUpdate.frontText, toUpdate.backText, toUpdate.lessonId]}
                                        labels={labels}
                                        onChange={(e)=> handleEditChangeEvent(e)}
                                        editFlag={true}
                                    />
                                    <Button
                                        text="update"
                                        onClick={() => handleUpdateOnClick()}
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
                                        values={[flashcard.id ,flashcard.frontText, flashcard.backText, flashcard.lessonId]}
                                        labels={labels}
                                        onChange={()=>{}}
                                        editFlag={false}
                                    />
                                    <Button
                                        text="edit"
                                        onClick={() => handleEditOnClick(flashcard)}
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
                    text="fronttext:"
                />
                <Input
                    placeholder="flashcard fronttext"
                    value={newFlashcard.frontText}
                    onChange={(e) => setNewFlashcard({...newFlashcard, frontText: e.target.value})}
                />
                <Label
                    text="backtext:"
                />
                <Input
                    placeholder="flashcard backtext"
                    value={newFlashcard.backText}
                    onChange={(e) => setNewFlashcard({...newFlashcard, backText: e.target.value})}
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
                    onClick={() => handleCreateOnClick()}
                />
            </div>
        </div>
    )
}