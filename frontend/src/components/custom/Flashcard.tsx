import React, { useState } from "react";

interface FlashcardProps {
  //string too long will clip and not show in component
  frontside: string;
  backside: string;
  toAnimate?: boolean;
  editable?: boolean;
}
function xor(a: boolean, b: boolean){
  return (a || b) && !(a && b);
}

export default function Flashcard({
  frontside,
  backside,
  toAnimate = false,
  editable = false,
}: Readonly<FlashcardProps>) {
  const animationDuration = 200;  //have to change in tailwind.config.js too
  const [flipped, setFlipped] = useState<boolean>(false);
  const [animating, setAnimating] = useState(false);
  const [halfway, setHalfway] = useState(false);
  const flipCard = () => {
    if (!animating) {
      setFlipped(!flipped);
      if (toAnimate) {
          setAnimating(true); // Start the animation
          setTimeout(()=>{
          setHalfway(true); //halfway animating
        }, animationDuration/2); 
        setTimeout(() => {
          setAnimating(false); 
          setHalfway(false);
        }, animationDuration);
      }
    }
  }

  return (
    <div className="max-h-44 rounded-md border bg-gray-200 border-gray-600">
    <button
      className={`
        h-36 w-52 rounded-t-md
        hover:opacity-80 
        ${flipped&&toAnimate ?
           `animate-flip` : 
           `animate-flipback`
          }
        ${xor(flipped, halfway) ? "bg-tertiary" : "bg-quinary"}
      `}
      onClick={() => flipCard()}
    >
      {/* Render frontside content only if not animating and not flipped */}
      {!animating && !flipped && <div className="h-full w-full rounded-t-md bg-tertiary overflow-clip">{frontside}</div>}

      {/* Render backside content only if not animating and flipped */}
      {!animating && flipped && <div className="h-full w-full rounded-t-md bg-quinary borderoverflow-clip">{backside}</div>}
    </button>
    {
      editable && 
      <div className="">
        <button 
          className="w-full rounded-b-md"
          onClick={(e) => {}}
        >
          edit
        </button>
      </div>
    }
    </div>
  );
}
