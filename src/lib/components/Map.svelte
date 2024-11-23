<script lang="ts">
    import { onMount } from "svelte";
    import mapImage from "../../assets/map.png";
    import { scale, ships, placedTowers, projectiles } from "../Globals";
    import Ship from "./Ship.svelte";
    import Tower from "./Tower.svelte";
    import Projectile from "./Projectile.svelte"
    import { scrollLeftGame, scrollTopGame } from "../CursorGlobals";

    let gameContainer: HTMLDivElement;
    let innerContainer: HTMLDivElement;
    let mapImageElement: HTMLImageElement;

    onMount(() => {
        gameContainer.addEventListener('scroll', () => {
            scrollLeftGame.set(gameContainer.scrollLeft);
            scrollTopGame.set(gameContainer.scrollTop);
        });

        mapImageElement.onload = () => {
            let gameContainerDimensions = gameContainer.getBoundingClientRect();
            let mapImageDimensions = mapImageElement.getBoundingClientRect();

            let horizontalScaleFactor =
                gameContainerDimensions.width / mapImageDimensions.width;
            let verticalScaleFactor =
                gameContainerDimensions.height / mapImageDimensions.height;

            scale.set(Math.max(horizontalScaleFactor, verticalScaleFactor));
            innerContainer.style.width = `${$scale * mapImageDimensions.width}px`;
            innerContainer.style.height = `${$scale * mapImageDimensions.height}px`;
        };
        
        window.addEventListener('click', ev => {
            console.log(
                ($scrollLeftGame + ev.clientX) / mapImageElement.width,
                ($scrollTopGame + ev.clientY) / mapImageElement.height
            );
        })
    });
</script>

<div
    class="relative w-full h-full overflow-auto scrollbar-hidden"
    bind:this={gameContainer}
>
    <div bind:this={innerContainer} class="relative">
        <img
            bind:this={mapImageElement}
            src={mapImage}
            class="-z-50 w-full h-full"
            alt="Map"
        />

        {#each $ships as ship}
            <Ship {...ship} />
        {/each}
        <Ship spawnedTime={0} positionAlongPath={0} health={100} type="Raft" />

        {#each $placedTowers as tower}
            <Tower {...tower} />
        {/each}

        {#each $projectiles as projectile}
            <Projectile {...projectile} />
        {/each}    
    </div>
</div>


<style>
    /* Hide scrollbar for Chrome, Safari and Opera */
    .scrollbar-hidden::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge add Firefox */
    .scrollbar-hidden {
        -ms-overflow-style: none;
        scrollbar-width: none; /* Firefox */
    }
</style>
