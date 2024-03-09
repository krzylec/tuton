interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    values: any[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
  
export default function Select({values, onChange, value, ...rest }: Readonly<SelectProps>) {
    const renderedValues: JSX.Element[] = [];

    values.forEach((value, index) => {
        renderedValues.push(
            <option key={index} value={value} className="text-center">
                {value}
            </option>
        );
    });

    return (
        <select onChange={onChange} value={value} className="border rounded min-w-10 focus:outline-none focus:border-primary">
            {renderedValues}
        </select>
    );
}
  