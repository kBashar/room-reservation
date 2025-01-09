import React from "react";
import { useState } from "react";
import { RoomModel, Room } from "./room";
import { NodeData  } from "./node";

export interface FloorModel {
    name: string
    rooms: RoomModel[]
}

interface FloorProps {
    floorData: NodeData;
    onRoomSelection: (node: NodeData) => void;
}

export const Floor = ({floorData, onRoomSelection}: FloorProps): JSX.Element => {
    
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <>
            <h4 onClick={handleClick}>{floorData.name}</h4>
            {
                isActive && floorData.rooms?.map((room) => (
                    <Room roomData={room} onRoomSelection={onRoomSelection}></Room>
                ))
            }
        </>
    )
}