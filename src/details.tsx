import { IRoom, IFloor } from './node'

interface GlobalDetailProps {
    floors: IFloor[]
}

export const GlobalDetail = ({floors}: GlobalDetailProps) => {
    return (
        <div>
            <h2>There are {floors?.length} floors</h2>
        </div>
    )
}

interface FloorDetailProps {
    floor: IFloor
}

export const FloorDetail = ({floor}: FloorDetailProps) => {
    return (
        <div>
            <h2>There are {floor.rooms.length} meeting rooms in {floor.name} floor</h2>
        </div>
    )
}

interface RoomDetailProps {
    room: IRoom
}

export const RoomDetail = ({room}: RoomDetailProps) => {
    return (
        <div>
            <h2>{room.name}</h2>
            <h3>Capacity: {room.capacity}</h3>
        </div>
    )
}