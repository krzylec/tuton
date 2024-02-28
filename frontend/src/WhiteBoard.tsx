import { Tldraw, useEditor } from "@tldraw/tldraw";
import './WhiteBoard.css';
import { useState } from "react";

export default function Whiteboard() {
    const editor = useEditor()

    return (
        
        <div style={{ position: 'sticky', inset: 0, zIndex: 1, width: 500, height: 400 }}>
            <Tldraw />
        </div>
    )
}