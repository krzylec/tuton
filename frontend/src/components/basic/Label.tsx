interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    htmlFor?: string;
    text: string;
}

export default function Label({htmlFor, text ,...rest }: Readonly<LabelProps>) {
  return (
    <div className="">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-bold mb-2"
        {...rest}
      >
        {text}
      </label>
    </div>
  );
}
