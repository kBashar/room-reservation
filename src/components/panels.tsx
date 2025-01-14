import { FloorTreeNode} from "./treenodes"
import { IFloor, Node, NodeType, IRoom, } from "./types"
import { useContext, useState, useRef } from "react"
import { FloorContext } from "../data/contexts"
import { ComboBox } from "./utils"
import { GlobalDetail, FloorDetail, SingleRoomDetail, RoomList } from './details'

export interface NavigationProps {
    onSelectionChange: (node: Node) => void
}

export const NavPanel = ({onSelectionChange}: NavigationProps) => {
    const floors = useContext(FloorContext)
    return (
        <div style={{ flex: 1, borderRight: "1px solid #ccc", padding: "1rem" }}>
        <h1>Floors</h1>
        <ul style={{ listStyleType: "none", padding: 0 }}>
        {
            floors.map((floor) => {
            return <li key={floor.name}><FloorTreeNode floorData={floor} onRoomSelection={onSelectionChange}></FloorTreeNode></li>
        })}
        </ul>
        </div>
    )
}


export const DetailPanel = ({children}) => {
    return (
            <div>
                {children}
            </div>
    )
}

interface RightPanelProps {
    isAvailable?: boolean
    minCapacity?: number
    selectedFloor?: string
    selectedRoom?: string
}

export const RightPanel = (rooms: RightPanelProps) => {

    const floors = useContext(FloorContext)
    const [roomFilters, setRoomFilters] = useState(rooms)
    const all_rooms = useRef<IRoom[]>(floors.flatMap(floor => floor.rooms))

    let selectedRooms = all_rooms.current

    console.log(roomFilters)
    
    if (roomFilters.selectedRoom !== undefined) {
        selectedRooms = selectedRooms.filter(room => room.name === roomFilters.selectedRoom)
    }
    else {
        if (roomFilters.selectedFloor !== undefined) {
            selectedRooms = selectedRooms.filter(room => room.floor === roomFilters.selectedFloor)
        }
        if (roomFilters.minCapacity !== undefined) {
            selectedRooms = selectedRooms.filter(room => room.capacity >= roomFilters.minCapacity)
        }
        if (roomFilters.isAvailable !== undefined) {
            selectedRooms = selectedRooms.filter(room => room.isAvailable === roomFilters.isAvailable)
        }
    }

    console.log(`Number of rooms ${selectedRooms.length}`)

    return (
        <div style={{ flex: 8, padding: "1rem" }} className="pt-6">
            <FilterPanle></FilterPanle>
            <RoomList rooms={selectedRooms}></RoomList>
        </div>
    )
}

interface FilterPanelProps {
    floor?: string,
    capacity?: number,
    availability?: boolean
}

export const FilterPanle = () => {

    const floors = useContext(FloorContext)
    const floorNames = floors.map(floor => floor.name)

    const floorSelectionChange = (e: Event) => {
        const target = e.target as HTMLSelectElement;
        console.log(target.value)
    }
    return (
        <div>
        <ComboBox name="floor_selection" label="Floor: " values={floorNames} valueChangeListener={floorSelectionChange}></ComboBox>
        </div>
    )
}