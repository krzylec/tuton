import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AdminVideoView from "./admin/AdminVideoTab"
import AdminFlashcardTab from "./admin/AdminFlashcardTab"

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
            </TabList>

            <TabPanel>
                <div className="flex justify-center p-4">
                <AdminVideoView></AdminVideoView>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="flex justify-center p-4">
                <AdminFlashcardTab></AdminFlashcardTab>
                </div>
            </TabPanel>
          </Tabs>
        </div>
      );
    }
    