interface TileListProps {
  labelList: string[];
}

export default function ListView({ labelList }: Readonly<TileListProps>) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {labelList.map((label, index) => (
        <div
          key={index}
          className="bg-gray-200 h-28 w-40 p-4 rounded-md text-center"
        >
          {label}
        </div>
      ))}
    </div>
  );
}
