export enum NodeType {
    Global = "global",
    Floor = "floor",
    Room = "room"
  }

export interface Node {
    type: NodeType
    name: string
}

export interface IRoom extends Node {
    capacity: number
}

export interface IFloor extends Node {
    rooms: IRoom[]
}