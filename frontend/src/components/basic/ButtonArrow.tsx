interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
}

export default function Button({ direction, ...rest }: Readonly<ButtonProps>) {
  return (
    <div className="">
      <button className="" type="button" {...rest}>
        {direction === "left" ? (
          <div className="border-solid border-t-transparent border-t-[25px] border-r-[50px] border-b-transparent border-b-[25px] border-zinc-600"></div>
        ) : (
          <div className="border-solid border-t-transparent border-t-[25px] border-l-[50px] border-b-transparent border-b-[25px] border-zinc-600"></div>
        )}
      </button>
    </div>
  );
}
