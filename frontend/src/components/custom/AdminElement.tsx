import { useEffect, useState } from "react";
import { Input, Label } from "../basic";

interface AdminGeneralElementProps{
    values: any[];
    labels: string[];
    editableFlag?: boolean;
}
export let inputValues: any[];

export function AdminElement({editableFlag, values, labels, ...rest}: Readonly<AdminGeneralElementProps>) {
    const renderedValues: JSX.Element[] = [];
    const [inputValue, setInputValue] = useState<any[]>(values);
    const handleInputChange = (e: any, index: any) => {
        // setInputValue(e.target.value)
        inputValues[index] = e.target.value;
        console.log(inputValues)
    }

    useEffect(() => {
        inputValues = values;
    })

    values.forEach((value, index) => {
        
        if (editableFlag) {
            //flaga editable ustawiona na true
            renderedValues.push(
            <div key={index} className="flex">
                <Label
                    text={`${labels.at(index)}: `}
                />
                {
                    index===0 && (
                        <Label
                            text={value}
                        />    
                    )
                }
                {
                    index!==0 && (
                        <Input
                            defaultValue={value}
                            onChange={(e) => handleInputChange(e, index)}
                        />   
                    )
                }
            </div>
            );
        } else {
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
        }
    });
    
    return (    
        <div className="grow flex space-x-6 overflow-x-auto">
            {renderedValues}
        </div>
    );
}
