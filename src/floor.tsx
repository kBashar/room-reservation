import { useState } from "react";
import { RoomTreeNode } from "./room";
import { IFloor, Node } from "./node";


interface FloorProps {
    floorData: IFloor;
    onRoomSelection: (node: Node) => void;
}

export const FloorTreeNode = ({floorData, onRoomSelection}: FloorProps): JSX.Element => {
    
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <>
            <h2 onClick={handleClick}>{floorData.name}</h2>
            {
                isActive && floorData.rooms.map((room) => (
                    <RoomTreeNode roomData={room} onRoomSelection={onRoomSelection}></RoomTreeNode>
                ))
            }
        </>
    )
}