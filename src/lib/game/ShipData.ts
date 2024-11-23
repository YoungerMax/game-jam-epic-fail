import ShipLibrary from "./ShipLibrary";

export interface ShipData {
    type: keyof typeof ShipLibrary;
    health: number;
    positionAlongPath: number;
    spawnedTime: number;
}