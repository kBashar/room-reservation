import { useState, useEffect } from 'react'
import { NavPanel, DetailPanel } from './panels'
import { GlobalDetail, FloorDetail, SingleRoomDetail } from './details'
import { Node, NodeType, IRoom, IFloor } from './types'

import '../App.css'

const globalNode = {
  type: NodeType.Global,
  name: "Cefalo Meeting Rooms"
}

function App() {
  const [selectedNode, setSelectedNode] = useState<Node | IFloor | IRoom>(globalNode);
  const [error, setError] = useState<string|null>(null)
  const [floors, setFloors] = useState<IFloor[]>([])

  useEffect(()=> {
      const controller = new AbortController()

      const fetcher = async () => {
        console.log("at fetcher function")
        const response = await fetch("https://67809eab85151f714b073cee.mockapi.io/api/v1/floors", {signal: controller.signal})
          if (!response.ok) {
            console.log(`Error code ${response.status}, text: ${response.statusText}, response: ${response.text}`)
            throw new Error(`An error happend to fetch the data`)
          }
          return await response.json()
      }

      const floorDataFetch = async () => {
        console.log("at floor data fetch")
        try {
            let floors: IFloor[] = await fetcher()
            setError(null)
            floors = floors.map(floor => {
              const rooms = floor.rooms.map(room => {
                return {
                  ...room,
                  floor: floor.name
                }
              })
              return {
                ...floor,
                rooms: rooms
              }
            })
            setFloors(floors)
          }
        catch(err: unknown) {
          if ((err as DOMException).name !== "AbortError") {
            console.log("Fetch aborted")
          } else {
            setError((err as Error).message || "An unknown error happened")
          }
        }
      }

      floorDataFetch()

      return () => {
        controller.abort()
      }
  }, [error])

  const handleNodeClick = (node: Node) => {
    setSelectedNode(node);
  };

  const getDetailView = (selectedNode: Node) => {
    switch(selectedNode.type) {
      case NodeType.Floor:
        return <FloorDetail floor={selectedNode as IFloor}></FloorDetail>
      case NodeType.Room:
        return <SingleRoomDetail room={selectedNode as IRoom}></SingleRoomDetail>
      default:
        return <GlobalDetail floors={floors} ></GlobalDetail>
    }
  }

  if (error) {
    return <h1>There are are some errors, try reloading the page</h1>
  }

  if (!error && !floors) {
    return <h1> Loading the floor data, please wait a while</h1>
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

