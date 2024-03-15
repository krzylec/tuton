interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text, ...rest }: Readonly<ButtonProps>) {
  return (
    <div className="">
      <button
        className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        {...rest}
      >
        {text}
      </button>
    </div>
  );
}
