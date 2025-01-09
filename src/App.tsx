import { useState } from 'react'
import {floors} from './data'
import { NavPanel, DetailPanel } from './panels'
import { GlobalDetail, FloorDetail, RoomDetail } from './details'
import { Node, NodeType, IRoom, IFloor } from './node'

import './App.css'


function App() {

  const [selectedNode, setSelectedNode] = useState<Node | IFloor | IRoom>({
    type: NodeType.Global,
    name: "Cefalo Meeting Rooms"
  });

  const handleNodeClick = (node: Node) => {
    setSelectedNode(node);
  };

  const getDetailView = (selectedNode: Node) => {
    switch(selectedNode.type) {
      case NodeType.Floor:
        return <FloorDetail floor={selectedNode as IFloor}></FloorDetail>
      case NodeType.Room:
        return <RoomDetail room={selectedNode as IRoom}></RoomDetail>
      default:
        return <GlobalDetail floors={floors} ></GlobalDetail>
    }
  }

  return (
    <div style={{ display: "flex", height: "100vh"}}>
      <NavPanel floors={floors} onSelectionChange={handleNodeClick} ></NavPanel> 
      <DetailPanel>
        {
          getDetailView(selectedNode)
        }
      </DetailPanel>
    </div>
  );
}


export default App
