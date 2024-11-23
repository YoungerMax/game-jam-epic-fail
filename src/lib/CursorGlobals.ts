import { writable } from "svelte/store";
import type ShipLibrary from "./game/ShipLibrary";
import type TowerLibrary from "./game/TowerLibrary";

export let placing = writable<keyof typeof TowerLibrary | keyof typeof ShipLibrary | undefined>(undefined);
export let scrollLeftGame = writable(0);
export let scrollTopGame = writable(0);