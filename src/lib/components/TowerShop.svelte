<script lang="ts">
    import { placing } from "../CursorGlobals";
    import TowerLibrary from "../game/TowerLibrary";
    import { money } from "../Globals";
</script>

<button class="bg-gray-400 w-full h-screen px-4 z-50 cursor-default" onclick={ () => placing.set(undefined) }>
    <div class="py-8">
        <h1 class="text-4xl text-white uppercase font-black text-center">Shop</h1>
        <p class="text-2xl text-white text-center">${$money.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2, notation: 'standard' })}</p>
    </div>

    <div class="mx-auto grid grid-cols-2 gap-4">
        {#each Object.keys(TowerLibrary) as tower}
            <button 
                onclick={ev => {
                    ev.stopPropagation();

                    if ($money >= TowerLibrary[tower].cost) {
                        placing.set(tower);
                    } else {
                        alert('Not enough money!');
                    }
                }}
            >
                <div class="bg-gray-300 rounded-xl p-1">
                    <img
                        src={TowerLibrary[tower].assetUrl}
                        class="w-full"
                        style="image-rendering: pixelated;"
                    />
                    <p class="text-center font-bold">{tower}</p>
                </div>
            </button>
        {/each}
    </div>
</button>
