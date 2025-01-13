import { FloorTreeNode} from "./treenodes"
import { IFloor, Node } from "./types"
import { useContext } from "react"
import { FloorContext } from "../data/contexts"
import { ComboBox } from "./utils"

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

interface DetailProps {
    children: React.ReactNode
}

export const DetailPanel = ({children}: DetailProps) => {
    return (
            <div>
                {children}
            </div>
    )
}

interface RightPanelProps {
    detailPanel: React.ReactNode
}

export const RightPanel = ({detailPanel}: RightPanelProps) => {
    return (
        <div style={{ flex: 8, padding: "1rem" }} className="pt-6">
            <FilterPanle></FilterPanle>
            <DetailPanel>{detailPanel}</DetailPanel> 
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