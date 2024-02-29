import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Whiteboard from './WhiteBoard';
import ReactPlayer from 'react-player';

export default function TabExplorer() {

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <div>
        {/* Przyciski zakładek */}
        <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
          <TabList className="flex justify-center m-1 flex-auto ">
            <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">whiteboard</Tab>
            <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">player</Tab>
            <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">todo</Tab>
          </TabList>

          <TabPanel>
            <div className="flex justify-center p-4">
              <Whiteboard></Whiteboard>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="flex justify-center p-4">
              <ReactPlayer url='https://www.youtube.com/watch?v=cIFmYOyeLpI&t=22657s' />
            </div>
          </TabPanel>

          <TabPanel>
            <div className="flex justify-center p-4">
              <h1>todo</h1>
            </div>
          </TabPanel>

        </Tabs>
      </div>
    </>
  )
}