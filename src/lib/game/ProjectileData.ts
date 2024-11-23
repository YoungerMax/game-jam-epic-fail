import type { ShipData } from "./ShipData";
import type { TowerData } from "./TowerData";

export interface ProjectileData {
    x: number;
    y: number;
    target: ShipData;
    type: string;
}