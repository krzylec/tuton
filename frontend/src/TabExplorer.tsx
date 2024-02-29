import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Whiteboard from './WhiteBoard';
import ReactPlayer from 'react-player';
import ToDo from './ToDo';
import Player from './Player';
import VideoView from './VideoView';

export default function TabExplorer() {

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <div>
        {/* Przyciski zakładek */}
        <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
          <TabList className="flex justify-center m-1 flex-auto">
            <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">whiteboard</Tab>
            <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">player</Tab>
            <Tab className="p-2 mx-1 cursor-pointer bg-blue-500 hover:bg-green-500 transition-colors rounded-md">todo list</Tab>
          </TabList>

          <TabPanel>
            <div className="flex justify-center p-4">
              <VideoView/>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="flex justify-center p-4">
              <Player></Player>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="flex justify-center p-4">
              <ToDo></ToDo>
            </div>
          </TabPanel>

        </Tabs>
      </div>
    </>
  )
}