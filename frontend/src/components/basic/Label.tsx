interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  text: any;
}

export default function Label({
  htmlFor,
  text,
  ...rest
}: Readonly<LabelProps>) {
  return (
    <div className="flex items-center">
      <label htmlFor={htmlFor} className="block text-sm font-bold" {...rest}>
        {text}
      </label>
    </div>
  );
}
