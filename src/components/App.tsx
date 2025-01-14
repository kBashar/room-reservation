import { useState, useEffect, useRef } from 'react'
import { NavPanel, RightPanel } from './panels'
import { Node, NodeType, IRoom, IFloor } from './types'
import { FloorContext } from '../data/contexts'

import '../App.css'

const globalNode = {
  type: NodeType.Global,
  name: "Cefalo Meeting Rooms"
}

function App() {
  const [error, setError] = useState<string|null>(null)
  const [floors, setFloors] = useState<IFloor[]>([])
  const [selectedRooms, setSelectedRooms] = useState<IRoom[]>([])
  let all_rooms = useRef<IRoom[]>([])


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
            let _floors: IFloor[] = await fetcher()
            setError(null)
            _floors = _floors.map(floor => {
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
            setFloors(_floors)
            all_rooms.current = _floors.flatMap(floor => floor.rooms)
            setSelectedRooms(all_rooms.current)
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
    console.log(` node type ${node.type} name: ${node.name}`)
    if (node.type === NodeType.Room) {
      setSelectedRooms(all_rooms.current.filter(room => room.name === node.name))
    }
    if (node.type === NodeType.Floor) {
      setSelectedRooms(all_rooms.current.filter(room => room.floor === node.name))
    }
  };

  const floorChangeHandle = (floorName: string) => {
    setSelectedRooms(all_rooms.current.filter(room => room.floor === floorName))
  }

  if (error) {
    return <h1>There are are some errors, try reloading the page</h1>
  }

  if (!error && !floors) {
    return <h1> Loading the floor data, please wait a while</h1>
  }

  return (
    <div style={{ display: "flex", height: "100vh"}}>
      <FloorContext.Provider value={floors}>
      <NavPanel onSelectionChange={handleNodeClick} ></NavPanel>
      <RightPanel
        selectedRooms={selectedRooms} 
        floorChangeHandle={floorChangeHandle}>
      </RightPanel> 
      </FloorContext.Provider>
    </div>
  );
}


export default App

