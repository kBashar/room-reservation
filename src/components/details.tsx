import { IRoom, IFloor } from './types'
import { FloorContext } from "../data/contexts"
import { useContext } from 'react'

interface GlobalDetailProps {
    floors: IFloor[]
}

export const GlobalDetail = () => {
  const floors = useContext(FloorContext)
  const all_rooms = floors.flatMap(floor => floor.rooms)

  return (
        <div>
          <RoomList rooms={all_rooms}></RoomList>
        </div>
    )
}

interface FloorDetailProps {
    floor: IFloor
}

export const FloorDetail = ({floor}: FloorDetailProps) => {
    return (
        <div>
            <RoomList rooms={floor.rooms}></RoomList>
        </div>
    )
}
  
interface RoomDetailProps {
  room: IRoom;
}

export const RoomDetail: React.FC<RoomDetailProps> = ({ room }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-2">
        <span className="text-blue-600">{room.name}</span>
      </h2>
      <p className="text-gray-700">
        Capacity: <span className="font-medium">{room.capacity}</span>
      </p>
      <p className="text-gray-700 flex items-center mt-2">
        Availability:
        <span
          className={`ml-2 px-3 py-1 text-sm rounded-full font-medium ${
            room.isAvailable
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {room.isAvailable ? "Available" : "Unavailable"}
        </span>
      </p>
    </div>
  );
};


interface RoomListProps {
  rooms: IRoom[]
}

export const RoomList = ({rooms}: RoomListProps) => {
  return (
    <div>
      <ul className='grid grid-cols-3 gap-4'>
        {rooms.map(room => (
          <li className='bg-gray-200 p-4' key={room.name}>
            <RoomDetail room={room}></RoomDetail>
            </li>
          ))}
      </ul>
    </div>
)
}

export const SingleRoomDetail = ({room}: RoomDetailProps) => {
  return <RoomList rooms={[room]}></RoomList>
}