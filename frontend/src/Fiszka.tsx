import React, { useState } from 'react';

interface FiszkaProps {
    title: string;
    content: string;
}

export default function Fiszka({ title, content }: FiszkaProps) {

    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <div className={`p-4 m-2 rounded-md ${clicked ? 'bg-green-200' : 'bg-red-100'}`}
        onClick={() => setClicked(!clicked)}
        >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p>{content}</p>
        </div>
    );
};
