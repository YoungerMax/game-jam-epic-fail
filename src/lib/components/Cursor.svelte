<script lang="ts">
    import { onMount } from "svelte";
    import { placing, scrollLeftGame, scrollTopGame } from "../CursorGlobals";
    import TowerLibrary from "../game/TowerLibrary";
    import ShipLibrary from "../game/ShipLibrary";
    import { scale, money, placedTowers } from "../Globals";

    let x = $state(0);
    let y = $state(0);

    onMount(() => {
        window.addEventListener('mousemove', event => {
            x = event.clientX;
            y = event.clientY;
        });

        window.addEventListener('click', event => {
            if ($placing === undefined) {
                return;
            }
            
            const tower = TowerLibrary[$placing];
            const ship = ShipLibrary[$placing];
            console.log($placing);

            if (tower === undefined) {
                // place ship
                if (ship.cost <= $money) {
                    money.set($money - ship.cost);
                }

            } else {
                if (tower.cost <= $money) {
                    money.set($money - tower.cost);

                    placedTowers.set([...$placedTowers, {
                        type: $placing,
                        x: (event.clientX + $scrollLeftGame) / $scale,
                        y: (event.clientY + $scrollTopGame) / $scale
                    }]);

                    console.log($placedTowers);
                }
            }
            placing.set(undefined);
        }, {
            passive: true
        });

        window.addEventListener('keydown', event => {
            if (event.key == 'Escape') {
                placing.set(undefined);
            }
        });
    });

    const combined = { ...TowerLibrary, ...ShipLibrary } as Record<string, { assetUrl: string }>;
</script>

{#if $placing !== undefined}
    <div style="position: fixed; top: {y}px; left: {x}px; z-index: 40;" class="cursor-grabbing">
        <img 
            src={combined[$placing].assetUrl}
            class="fixed w-32 -translate-x-16 -translate-y-16 z-10"
            style="image-rendering: pixelated;"
            alt="cursor"
        />

        {#if 'range' in combined[$placing]}
            <div class="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 border-8 bg-green-400 bg-opacity-20 border-opacity-50 rounded-full border-green-500" style="width: {(combined[$placing].range as number) * 2 * $scale}px; height: {(combined[$placing].range as number) * 2 * $scale}px;">
                
            </div>
        {/if}
    </div>
{/if}