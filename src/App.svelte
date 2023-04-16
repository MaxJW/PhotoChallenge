<script lang="ts">
    import Challenges from './components/Challenges.svelte';
    import { SvelteToast } from '@zerodevx/svelte-toast';
    import User from './components/User.svelte';

    //Currently set name
    let nameVal = '';
</script>

<User bind:nameVal />
{#if nameVal != ''}
    <Challenges name={nameVal} />
{/if}

<SvelteToast />

<style>
    :global(html) {
        height: 100%;
        box-sizing: border-box;
        border: 30px solid;
        border-image-source: url(/src/assets/border.png);
        border-image-slice: 181 335 204 212;
        border-image-width: 182px 336px 201px 209px;
        border-image-outset: 0px 0px 0px 0px;
        border-image-repeat: stretch repeat;
    }
</style>
