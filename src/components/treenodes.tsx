import { useState } from "react";
import { IFloor, Node } from "./types";


interface FloorProps {
    floorData: IFloor;
    onRoomSelection: (node: Node) => void;
}

export const FloorTreeNode = ({floorData, onRoomSelection}: FloorProps): JSX.Element => {
    
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(!isActive)
        onRoomSelection(floorData)
    }

    return (
        <>
            <h2 onClick={handleClick} className="hover:bg-sky-700" style={{textAlign: "left"}}>{floorData.name}</h2>
            {
                isActive && floorData.rooms.map((room) => (
                    <RoomTreeNode roomData={room} onRoomSelection={onRoomSelection}></RoomTreeNode>
                ))
            }
        </>
    )
}


interface RoomProps {
    roomData: Node;
    onRoomSelection: (node: Node) => void;
}

export const RoomTreeNode = ({ roomData, onRoomSelection}: RoomProps): JSX.Element => {
    return (
        <div onClick={() => onRoomSelection(roomData)}>
            <h4 style={{textAlign: "left"}} className="hover:bg-violet-700">{"|\n----" + roomData.name}</h4>
        </div>
    )
}