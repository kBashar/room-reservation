import { IRoom, IFloor } from './types'

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