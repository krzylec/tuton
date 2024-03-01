import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ToDo from "./ToDo";
import VideoView from "./VideoView";
import ListView from "./ListView";

export default function TabExplorer() {
  const [selectedTab, setSelectedTab] = useState(0);

  const dataList = [
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
    "Label 5",
    "Label 6",
    "Label 7",
    "Label 8",
    "Label 9",
    "Label 10",
  ];

  return (
    <div>
      {/* Przyciski zakładek */}
      <Tabs
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
      >
        <TabList className="flex justify-center m-1 flex-auto">
          <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">
            Lista
          </Tab>
          <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">
            Wideo
          </Tab>
          <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">
            todo list
          </Tab>
        </TabList>

        <TabPanel>
          <div className="flex justify-center p-4">
            <ListView labelList={dataList} />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex justify-center p-4">
            <VideoView />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex justify-center p-4">
            <ToDo></ToDo>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
