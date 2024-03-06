import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import VideoView from "./views/LessonView";
import ListView from "./views/ListView";
import LoginView from "./views/LoginView";
import ToDoView from "./views/ToDoView";
import AdminView from "./views/AdminView";

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
            Lesson
          </Tab>
          <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">
            Logowanie
          </Tab>
          <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">
            todo list
          </Tab>
          <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">
            Admin
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
            <LoginView></LoginView>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex justify-center p-4">
            <ToDoView></ToDoView>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex justify-center p-4">
            <AdminView></AdminView>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
