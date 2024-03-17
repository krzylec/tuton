import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AdminVideoView from "./admin/AdminVideoTab";
import AdminFlashcardTab from "./admin/AdminFlashcardTab";
import AdminLessonTab from "./admin/AdminLessonTab";

export default function TabExplorer() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      {/* Przyciski zakładek */}
      <Tabs
        selectedIndex={selectedTab}
        selectedTabClassName="p-2 mx-1 cursor-pointer bg-green-500 hover:bg-green-500 transition-colors rounded-md"
        onSelect={(index) => setSelectedTab(index)}
      >
        <TabList className="flex justify-center m-1 flex-auto">
          <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">
            Video
          </Tab>
          <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">
            Flashcard
          </Tab>
          <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">
            Lesson
          </Tab>
        </TabList>

        <TabPanel>
          <div>
            <AdminVideoView></AdminVideoView>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <AdminFlashcardTab></AdminFlashcardTab>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <AdminLessonTab></AdminLessonTab>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
