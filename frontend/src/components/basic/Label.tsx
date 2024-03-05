interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    htmlFor: string;
    text: string;
}

export default function Label({htmlFor, text ,...rest }: Readonly<LabelProps>) {
  return (
    <div className="">
      <label
        htmlFor={htmlFor}
        className="block text-gray-700 text-sm font-bold mb-2"
        {...rest}
      >
        {text}
      </label>
    </div>
  );
}
