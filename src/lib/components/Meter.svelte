<script lang="ts">
    
    let { value, max, color, text }: { value: number, max: number, color: string, text: string } = $props();
</script>

<div class="relative bg-gray-700 rounded-full w-80 h-8 text-xl">
    <div class="absolute top-0 left-0 {color} rounded-full h-full" style:width={`${value / max * 100}%`} style:transition="0.1s linear;"></div>
    <p class="font-bold text-white relative top-1/2 left-2 -translate-y-1/2">{text}</p>
</div>