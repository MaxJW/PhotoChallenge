<script lang="ts">
    import Challenges from './components/Challenges.svelte';
    import { SvelteToast } from '@zerodevx/svelte-toast';
    import User from './components/User.svelte';
    import { tutorial } from './stores.js';

    let tutorialViewed = false;
    tutorial.subscribe((value) => {
        tutorialViewed = value;
    });
    if (!tutorialViewed) {
        if (
            confirm(
                "Thanks for scanning!\n\nIf you fancy some more photo challenges, we have created a bunch for you here, just enter your name, and get snapping!\n\nClick 'New Challenge' if you don't like the one you have, and click 'Complete Challenge' to mark it as complete! There's a leaderboard and everything 😁\n\nClick OK to hide this pop-up.",
            )
        ) {
            tutorial.set(true);
        }
    }

    //Currently set name
    let nameVal = '';
</script>

<User bind:nameVal />
{#if nameVal != ''}
    <Challenges name={nameVal} />
{/if}

<SvelteToast />

<style>
</style>
