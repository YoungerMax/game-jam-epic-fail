<script lang="ts">
    import { onMount } from "svelte";
    import "./app.css";
    import Cursor from "./lib/components/Cursor.svelte";
    import Map from "./lib/components/Map.svelte";
    import Meter from "./lib/components/Meter.svelte";
    import Shop from "./lib/components/TowerShop.svelte";
    import { maxHealth } from "./lib/game/GameConsts";
    import { health, round, ships } from "./lib/Globals";
    import ShipsForRound from "./lib/game/ShipsForRound";
    import ShipLibrary from "./lib/game/ShipLibrary";
    
    let instructionsOpen = $state(true);
    let roundOver = $state(false);
    let spawningIndex = 0;
    
    onMount(() => {
        setInterval(() => {
            if (ShipsForRound[$round].length > spawningIndex) {
                const shipTypeToSpawn = ShipsForRound[$round][spawningIndex++];
                const shipData = ShipLibrary[shipTypeToSpawn];

                ships.set([...$ships, {
                    health: shipData.health,
                    positionAlongPath: 0,
                    type: shipTypeToSpawn,
                    spawnedTime: Date.now()
                }]);
            }
        }, 1000);
    });
</script>

<div class="fixed top-10 left-10 flex flex-col gap-2 z-50">
    <Meter
        color="bg-blue-500"
        value={$round}
        max={10}
        text="Round: {$round} / 10"
    />
    <Meter
        color="bg-red-500"
        value={$health}
        max={maxHealth}
        text="Health: {($health / maxHealth) * 100}%"
    />
</div>

<Cursor />

<main>
    <Map />

    <Shop />
</main>

{#if instructionsOpen}
<div
    class="bg-gray-400 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-96 p-8 rounded-xl z-50"
>
    <h1 class="text-2xl font-black uppercase text-center mb-4">
        Welcome to Subversive!
    </h1>
    <p class="mb-4">
        AHOY, MATEY! Listen close and listen keen, fer <strong>enemy ships be sailin' yer way</strong>,
        filled to the brim with scurvy dogs and scallywags! Yer gotta defend
        yer waters, so hoist the sails and <strong>plant yerself some towers</strong>
        to blast those scallywags out o' the sea! Place yer cannons and yer
        missiles with care, and <strong>don't ye be lettin' those buccaneers get the best o' ye</strong>!
    </p>
    <button
        class="uppercase bg-gray-300 font-black px-8 py-4 rounded-xl mx-auto"
        onclick={() => {
            instructionsOpen = false;
            roundOver = true;
        }}
    >
        Aye aye!
    </button>
</div>
{/if}

{#if roundOver}
<div
    class="bg-gray-400 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-96 p-8 rounded-xl z-50"
>
    <button
        class="uppercase bg-gray-300 font-black px-8 py-4 rounded-xl mx-auto"
        onclick={() => {
            roundOver = false;
        }}
    >
        Start Next Round
    </button>
</div>
{/if}

<style>
    main {
        @apply grid;
        grid-template-columns: 1fr 350px;
    }
</style>
