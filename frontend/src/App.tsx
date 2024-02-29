import React from 'react';
import logo from './logo.svg';
import { Tldraw } from "@tldraw/tldraw";
import Whiteboard from './WhiteBoard';
import TabExplorer from './TabExplorer';

function App() {
  return (
    <>
      <h1 className="text-center m-2 text-3xl font-bold hover:animate-spin">
        TUTORN
      </h1>
      <TabExplorer />
    </>
  );
}

export default App;
