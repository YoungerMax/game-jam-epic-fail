import TowerLibrary from "./TowerLibrary";

export interface TowerData {
    x: number;
    y: number;
    type: keyof typeof TowerLibrary;
}
