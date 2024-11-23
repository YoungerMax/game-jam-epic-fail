<script lang="ts">
    import { onMount } from "svelte";
    import type { ProjectileData } from "../game/ProjectileData";
    import TowerLibrary from "../game/TowerLibrary";
    import { Path, PathPoint } from "../game/Path";
    import ProjectileLibrary from "../game/ProjectileLibrary";
    import { scale } from "../Globals";
    import { shipPath } from "../game/GameConsts";

    const maxDistanceForProjectileToHit = 10;

    let { x, y, target, type }: ProjectileData = $props();

    let projectileType = $derived(ProjectileLibrary[type]);
    let direction = $state();

    let last: number;

    function loop(timestamp: number) {
        const dt = timestamp - last;
        last = timestamp;

        const shipLocation = shipPath.calculatePositionForDistance(target.positionAlongPath);        
        const pathFromProjectileToShip = new Path([new PathPoint(x, y), new PathPoint(shipLocation.x, shipLocation.y)]);

        const dx = shipLocation.x - x;
        const dy = shipLocation.y - y;
        direction = Math.atan2(dy, dy);
        


        // positionAlongPath += deltaTime * projectileType.speed;

        // const calculatedPositionForDistance = pathFromProjectileToShip.calculatePositionForDistance(positionAlongPath);
        // x = calculatedPositionForDistance.x;
        // y = calculatedPositionForDistance.y;
        // direction = calculatedPositionForDistance.direction;
        
        // if (new PathPoint(x, y).calculateDirectionTo(new PathPoint(shipLocation.x, shipLocation.y)) <= maxDistanceForProjectileToHit) {
        //     target.health -= TowerLibrary[shotFrom.type].damage;
        // }

        // if ( > 0) {
        //     timeUntilNextShot -= deltaTime;
        // } else {
            
        //     timeUntilNextShot = TowerLibrary[type].attackSpeed;
        // }

        requestAnimationFrame(loop);
    }

    onMount(() => {
        requestAnimationFrame(loop);
    });
</script>

<img
    class="absolute game-object z-10"
    style={`top: ${y * $scale}px; left: ${x * $scale}px; transform: ${direction}deg;`}
    src={projectileType.assetUrl}
    alt="Projectile"
/>

<style>
    img {
        width: 64px;
        height: 64px;
        image-rendering: pixelated;
    }
</style>
