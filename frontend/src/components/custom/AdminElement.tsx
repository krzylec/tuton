import { Label } from "../basic";

interface AdminGeneralElementProps{
    values: any[];
    labels: string[];
}

export default function AdminElement({values, labels, ...rest}: Readonly<AdminGeneralElementProps>) {
    const renderedValues: JSX.Element[] = [];

    values.forEach((value, index) => {
        renderedValues.push(
        <div key={index} className="flex space-x-1">
            <Label
                text={`${labels.at(index)}: `}
            />
            <Label
                text={value}
            />        
        </div>
        );
    });

    return (    
        <div className="grow flex space-x-6 overflow-x-auto">
            {renderedValues}
        </div>
    );
}