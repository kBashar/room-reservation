import { Node } from "./node";

interface RoomProps {
    roomData: Node;
    onRoomSelection: (node: Node) => void;
}

export const RoomTreeNode = ({roomData, onRoomSelection}: RoomProps): JSX.Element => {
    return (
        <div onClick={() => onRoomSelection(roomData)}>
            <h4>    {roomData.name}</h4>
        </div>
    )
}