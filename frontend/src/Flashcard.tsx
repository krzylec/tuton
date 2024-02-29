import React, { useState } from "react";

interface FlashcardProps {
  title: string;
  content: string;
  contentFlipped: string;
}

export default function Flashcard({
  title,
  content,
  contentFlipped,
}: FlashcardProps) {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div
      className={`p-4 m-2 rounded-md h-36 w-52 hover:opacity-80 hover:border hover:border-gray-600 ${clicked ? "bg-green-200" : "bg-red-100"}`}
      onClick={() => setClicked(!clicked)}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{clicked ? contentFlipped : content}</p>
    </div>
  );
}
