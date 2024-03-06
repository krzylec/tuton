import React, { useEffect, useState } from 'react';
import Button from "../../components/basic/Button";
import Label from "../../components/basic/Label";
import { fetchFlashcards } from '../../handlers/FlashcardHandler';
import Flashcard from '../../components/custom/Flashcard';

interface FlashcardDto {
    id: number;
    flashcardText: string;
    lessonId: number;
}

export default function AdminView(){
    const [flashcards, setFlashcards] = useState<FlashcardDto[]>([]);

    useEffect(()=> {
        fetchFlashcards(setFlashcards);
    }, []);

    return (
        <div>
        <h1>Flashcards</h1>
        {/* {Object.entries(
            flashcards.reduce(() => (
                
            ))
        )} */}
        </div>
    )
}