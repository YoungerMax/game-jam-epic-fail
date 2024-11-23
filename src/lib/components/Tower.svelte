<script lang="ts">
    import { onMount } from "svelte";
    import { shipPath } from "../game/GameConsts";
    import { PathPoint } from "../game/Path";
    import type { ShipData } from "../game/ShipData";
    import type { TowerData } from "../game/TowerData";
    import TowerLibrary from "../game/TowerLibrary";
    import { ships, projectiles, scale } from "../Globals";

    let data: TowerData = $props();
    const { x, y, type } = data;

    function getTarget() {
        let target: ShipData | null = null;

        for (const ship of $ships) {
            const shipLocation = shipPath.calculatePositionForDistance(ship.positionAlongPath);
            console.log(shipLocation);
            if (new PathPoint(shipLocation.x, shipLocation.y).calculateDistanceTo(new PathPoint(x, y)) < TowerLibrary[type].range) {
                if (target === null || ship.positionAlongPath > target.positionAlongPath) {
                    target = ship;
                }
            }
        }

        return target;
    }

    // function loop(timestamp: number) {
    //     if (start === undefined) {
    //         start = timestamp;
    //     }
    //     const deltaTime = timestamp - start;

    //     if (timeUntilNextShot > 0) {
    //         timeUntilNextShot -= deltaTime;
    //     } else {
    //         const target = getTarget();
            
    //         if (target !== null) {
    //             projectiles.set([...$projectiles, {
    //                 shotFrom: data,
    //                 target,
    //             }])

    //             timeUntilNextShot = TowerLibrary[type].attackSpeed;
    //         }
    //     }
    //     requestAnimationFrame(loop);
    // }

    onMount(() => {
        setInterval(() => {
            const target = getTarget();
            console.log("target: ", target)

            if (target !== null) {
                projectiles.set([
                    ...$projectiles,
                    {
                        x: x * $scale,
                        y: y * $scale,
                        target: target,
                        type: TowerLibrary[type].projectileType
                    }
                ]);
            }   
        }, TowerLibrary[type].attackSpeed * 1000);
    });
</script>

<img
    class="game-object z-50"
    style={`top: ${y * $scale}px; left: ${x * $scale}px;`}
    src={TowerLibrary[type].assetUrl}
    alt="Tower"
/>

<style>
    img {
        position: absolute;
        width: 128px;
        height: 128px;
        image-rendering: pixelated;
        transform: translate(-50%, -50%);
    }
</style>
