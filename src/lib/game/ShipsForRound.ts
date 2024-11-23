import type ShipLibrary from "./ShipLibrary";

/**
 * Array of ship lists for each round.
 * Each element in the inner array represents the ship type for that specific round.
 */
export default [
    ["Raft", "Raft", "Raft", "Raft", "Raft"], // Round1
    ["Sailboat", "Raft", "Raft", "Raft", "Raft"], // Round 2
    ["Sailboat", "Raft", "Sailboat", "Raft", "Sailboat"], // Round 3
    ["Sailboat", "Sailboat", "Sailboat", "Sailboat", "Sailboat"], // Round 4
    ["Raft", "Raft", "Sailboat", "Sailboat", "Sailboat", "Raft", "Sailboat", "Sailboat"], // Round 5
    ["Sailboat", "Submarine", "Sailboat", "Raft", "Sailboat", "Sailboat"], // Round 6
    ["Sailboat", "Submarine", "Sailboat", "Sailboat", "Submarine"], // Round 7
    ["Raft", "Sailboat", "Submarine", "Submarine", "Submarine", "Sailboat"], // Round 8
    ["Submarine", "Sailboat", "Raft", "Submarine", "Sailboat", "Raft", "Submarine", "Sailboat", "Raft"], // Round 9
    ["Submarine", "Submarine", "Submarine", "Submarine", "Aircraft Carrier"], // Round 10
] as (keyof typeof ShipLibrary)[][];
