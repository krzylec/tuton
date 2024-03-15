import { Input, Label } from "../basic";

interface AdminGeneralElementProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  //pass ID as first element in values and labels
  values: any[];
  labels: string[];
  editFlag?: boolean;
  //onChange is applied only to input elements
  onChange: (event: React.ChangeEvent<HTMLDivElement>) => void;
}

//General element to show in admin panels
//Renders whole row based on provided values and labels
export default function AdminElement({
  values,
  labels,
  editFlag,
  onChange,
  ...rest
}: Readonly<AdminGeneralElementProps>) {
  const renderedValues: JSX.Element[] = [];

  if (!editFlag) {
    //Render components to show them
    values.forEach((value, index) => {
      renderedValues.push(
        <div key={index} className="flex space-x-1">
          <Label text={`${labels.at(index)}: `} />
          <Label text={value} />
        </div>,
      );
    });
  } else {
    //Render components to edit them
    values.forEach((value, index) => {
      renderedValues.push(
        <div key={index} className="flex space-x-1">
          <Label text={`${labels.at(index)}: `} />
          {
            //Id as not editable
            index === 0 ? (
              <Input value={value} disabled />
            ) : (
              <Input
                name={labels.at(index)}
                value={value}
                onChange={onChange}
              />
            )
          }
        </div>,
      );
    });
  }

  return (
    <div className="grow flex space-x-6 overflow-x-auto">{renderedValues}</div>
  );
}
