<script lang="ts">
    import ShipLibrary from "../game/ShipLibrary";
    import { money, ships } from "../Globals";
</script>

<button class="bg-gray-400 w-full h-screen px-4 z-50 cursor-default">
    <div class="py-8">
        <h1 class="text-4xl text-white uppercase font-black text-center">Shop</h1>
        <p class="text-2xl text-white text-center">${$money.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2, notation: 'standard' })}</p>
    </div>

    <div class="mx-auto grid grid-cols-2 gap-4">
        {#each Object.keys(ShipLibrary) as ship}
            <button 
                onclick={ev => {
                    ev.stopPropagation();

                    if ($money >= ShipLibrary[ship].cost) {
                        
                    } else {
                        alert('Not enough money!');
                    }
                }}
            >
                <div class="bg-gray-300 rounded-xl p-1">
                    <img
                        src={ShipLibrary[ship].assetUrl}
                        class="w-full"
                        style="image-rendering: pixelated;"
                    />
                    <p class="text-center font-bold">{ship}</p>
                </div>
            </button>
        {/each}
    </div>
</button>
