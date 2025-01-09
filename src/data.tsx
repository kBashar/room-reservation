import { NodeType, IFloor } from './node'

export const floors: IFloor[] = [
    {
      "name": "Turing",
      "type": NodeType.Floor,
      "rooms": [
        {
          "name": "Stream",
          "type": NodeType.Room,
          "capacity": 12
        },
        {
          "name": "Block",
          "type": NodeType.Room,
          "capacity": 8
        },
        {
          "name": "Turing Byte 01",
          "capacity": 6,
          "type": NodeType.Room,
        },
        {
          "name": "Turing Bit 01",
          "type": NodeType.Room,
          "capacity": 1
        }
      ]
    },
    {
      "name": "Ada",
      "type": NodeType.Floor,
      "rooms": [
            {
                "name": "Stream",
                "type": NodeType.Room,
                "capacity": 12
            },
            {
                "name": "Block",
                "type": NodeType.Room,
                "capacity": 8
            },
            {
                "name": "Ada Byte 01",
                "type": NodeType.Room,
                "capacity": 6
            },
            {
                "name": "Ada Bit 01",
                "type": NodeType.Room,
                "capacity": 1
            }
        ]
    },
    {
      "name": "Hopper",
      "type": NodeType.Floor,
      "rooms": [
            {
                "name": "Stream",
                "type": NodeType.Room,
                "capacity": 12
            },
            {
                "name": "Block",
                "type": NodeType.Room,
                "capacity": 8
            },
            {
                "name": "Hopper Byte 01",
                "type": NodeType.Room,
                "capacity": 6
            },
            {
                "name": "Hopper Bit 01",
                "type": NodeType.Room,
                "capacity": 1
            }
        ]
    }
  ]