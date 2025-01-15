import { FloorTreeNode} from "./treenodes"
import { IFloor, Node, NodeType, IRoom, } from "./types"
import { useContext, useState, useRef, EventHandler, ChangeEventHandler } from "react"
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
    selectedFloor: string
    selectedRooms: IRoom[]
    floorChangeHandle: (floorName: string) => void
}

export const RightPanel = ({selectedFloor, selectedRooms, floorChangeHandle}: RightPanelProps) => {

    return (
        <div style={{ flex: 8, padding: "1rem" }} className="pt-6">
            <FilterPanle selectedFloor={selectedFloor} onFloorChange={floorChangeHandle}></FilterPanle>
            <RoomList rooms={selectedRooms}></RoomList>
        </div>
    )
}

interface FilterPanelProps {
    selectedFloor: string
    onFloorChange: (floorName: string) => void
    availableFilterChange: (isAvailable: boolean) => void
}

export const FilterPanle = ({selectedFloor, onFloorChange}: FilterPanelProps) => {

    const floors = useContext(FloorContext)
    let floorNames = floors.map(floor => floor.name)
    floorNames.unshift("All")

    const floorSelectionChange = (e: Event) => {
        const target = e.target as HTMLSelectElement;
        console.log(target.value)
        onFloorChange(target.value)
    }
    return (
        <div>
        <ComboBox selected={selectedFloor} name="floor_selection" label="Floor: " values={floorNames} valueChangeListener={floorSelectionChange}></ComboBox>
        </div>
    )
}