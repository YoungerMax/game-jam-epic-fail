import { type Writable, writable } from "svelte/store";
import type { TowerData } from "./game/TowerData";
import type { ShipData } from "./game/ShipData";
import type { ProjectileData } from "./game/ProjectileData";

export let scale: Writable<number> = writable(3);
export let round = writable(1);
export let money = writable(10000);
export let health = writable(200);  // MAX HEALTH
export let placedTowers: Writable<TowerData[]> = writable([]);
export let projectiles: Writable<ProjectileData[]> = writable([]);
export let ships: Writable<ShipData[]> = writable([]);