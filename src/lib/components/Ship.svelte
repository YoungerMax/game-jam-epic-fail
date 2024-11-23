<script lang="ts">
    import { onMount } from "svelte";
    import { shipPath } from "../game/GameConsts";
    import type { ShipData } from "../game/ShipData";
    import ShipLibrary from "../game/ShipLibrary";
    import { scale } from "../Globals";

    let {
        positionAlongPath,
        type,
        health,
        spawnedTime
    }: ShipData = $props();

    let x = $state(0);
    let y = $state(0);
    let direction = $state(0);

    function loop(timestamp: number) {
        const calculatedPositionForDistance = shipPath.calculatePositionForDistance(0);
        x = calculatedPositionForDistance.x;
        y = calculatedPositionForDistance.y;
        direction = calculatedPositionForDistance.direction;

        requestAnimationFrame(loop);
    }

    onMount(() => {
        requestAnimationFrame(loop);

    });

    const FUCK_FACTOR_V = (1024 / 10) * $scale;
    const FUCK_FACTOR_H = (1820 / 14.21875) * $scale;
</script>

<img
    class="game-object -translate-x-1/2 -translate-y-1/2"
    style={`top: ${y * FUCK_FACTOR_V}px; left: ${x * FUCK_FACTOR_H}px; transform: ${direction}deg;`}
    src={ShipLibrary[type].assetUrl}
    alt="Ship"
/>

<style>
    .game-object {
        position: absolute;
        image-rendering: pixelated;
        width: 100px;
        height: 100px;
    }
</style>
