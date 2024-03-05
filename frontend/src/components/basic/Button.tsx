interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ ...rest }: Readonly<ButtonProps>) {
  return (
    <div className="">
      <button
        className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        {...rest}
      />
    </div>
  );
}
