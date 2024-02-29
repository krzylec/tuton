import { Tldraw, useEditor } from "@tldraw/tldraw";
import { useState } from "react";
import "@tldraw/tldraw/tldraw.css";

export default function Whiteboard() {
  const editor = useEditor();

  return (
    <div
      style={{
        position: "sticky",
        inset: 0,
        zIndex: 1,
        width: 500,
        height: 500,
      }}
    >
      <Tldraw />
    </div>
  );
}
