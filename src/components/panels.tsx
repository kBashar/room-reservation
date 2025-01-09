import { FloorTreeNode} from "./treenodes"
import { IFloor, Node } from "./types"

export interface NavigationProps {
    floors: IFloor[]
    onSelectionChange: (node: Node) => void
}

export const NavPanel = ({floors, onSelectionChange}: NavigationProps) => {
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
        <div style={{ flex: 8, padding: "1rem" }} className="pt-6">
            <div>
                {children}
            </div>
        </div>
    )
}