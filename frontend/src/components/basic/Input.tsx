interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  setValue?: any;
}

export default function Input({ setValue, ...rest }: Readonly<InputProps>) {
  return (
    <div className="">
      <input
        className="border rounded p-2 w-full focus:outline-none focus:border-primary"
        type="text"
        {...rest}
      />
    </div>
  );
}
