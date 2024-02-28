import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Whiteboard from './WhiteBoard';
import ReactPlayer from 'react-player';
import './TabExplorer.css'

export default function TabExplorer() {

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <div>
        {/* Przyciski zakładek */}
        <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
          <TabList className="tabs-list">
            <Tab className="tab-button">whiteboard</Tab>
            <Tab className="tab-button">player</Tab>
            <Tab className="tab-button">todo</Tab>
          </TabList>

          <TabPanel>
            <div className="tab-content">
              <Whiteboard></Whiteboard>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="tab-content">
              <ReactPlayer url='https://www.youtube.com/watch?v=cIFmYOyeLpI&t=22657s' />
            </div>
          </TabPanel>

          <TabPanel>
            <div className="tab-content">
              <h1>todo</h1>
            </div>
          </TabPanel>

        </Tabs>
      </div>
    </>
  )
}