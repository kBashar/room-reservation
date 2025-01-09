import { NodeData } from "./node";

export interface RoomModel {
    name: string
    capacity: number
}

interface RoomProps {
    roomData: NodeData;
    onRoomSelection: (node: NodeData) => void;
}

export const Room = ({roomData, onRoomSelection}: RoomProps): JSX.Element => {
    return (
        <div onClick={() => onRoomSelection(roomData)}>
            <h5>{roomData.name}</h5>
        </div>
    )
}