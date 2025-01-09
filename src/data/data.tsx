import { NodeType, IFloor } from '../components/types'

export const floors: IFloor[] = [
    {
      "name": "Turing",
      "type": NodeType.Floor,
      "rooms": [
        {
          "name": "Turing Stream",
          "type": NodeType.Room,
          "capacity": 12,
          "isAvailable": true
        },
        {
          "name": "Turing Block",
          "type": NodeType.Room,
          "capacity": 8,
          "isAvailable": true
        },
        {
          "name": "Turing Byte 01",
          "capacity": 6,
          "type": NodeType.Room,
          "isAvailable": false
        },
        {
          "name": "Turing Bit 01",
          "type": NodeType.Room,
          "capacity": 1,
          "isAvailable": false
        }
      ]
    },
    {
      "name": "Ada",
      "type": NodeType.Floor,
      "rooms": [
            {
                "name": "Ada Stream",
                "type": NodeType.Room,
                "capacity": 12,
                "isAvailable": true
            },
            {
                "name": "Ada Block",
                "type": NodeType.Room,
                "capacity": 8,
                "isAvailable": false
            },
            {
                "name": "Ada Byte 01",
                "type": NodeType.Room,
                "capacity": 6,
                "isAvailable": true
            },
            {
                "name": "Ada Bit 01",
                "type": NodeType.Room,
                "capacity": 1,
                "isAvailable": true
            }
        ]
    },
    {
      "name": "Hopper",
      "type": NodeType.Floor,
      "rooms": [
            {
                "name": "Hopper Stream",
                "type": NodeType.Room,
                "capacity": 12,
                "isAvailable": true
            },
            {
                "name": "Hopper Block",
                "type": NodeType.Room,
                "capacity": 8,
                "isAvailable": false
            },
            {
                "name": "Hopper Byte 01",
                "type": NodeType.Room,
                "capacity": 6,
                "isAvailable": false
            },
            {
                "name": "Hopper Bit 01",
                "type": NodeType.Room,
                "capacity": 1,
                "isAvailable": true
            }
        ]
    }
  ]