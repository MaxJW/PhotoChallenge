<script lang="ts">
    import { name } from '../stores.js';

    //Currently set name
    export let nameVal;
    name.subscribe((value) => {
        nameVal = value;
    });

    //Set a new name
    let newName = '';
    function setName() {
        newName = newName.toLowerCase();
        name.set(newName);
    }

    function resetName() {
        newName = '';
        setName();
    }

    //Log current name
    $: console.log(nameVal);
</script>

{#if nameVal != ''}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p id="logged-in">{nameVal} <span on:click={resetName}>Change</span></p>
{:else}
    <div id="name-container">
        <label for="name-input">What's your name?</label>
        <input id="name-input" bind:value={newName} type="text" />
        <button on:click={setName}>Let's go!</button>
    </div>
{/if}

<style>
    #name-container {
        position: fixed;
        display: flex;
        flex-direction: column;
        max-width: fit-content;
        justify-content: center;
        margin: 0 auto;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        text-align: center;
        padding-left: 30px;
        padding-right: 30px;
    }

    #name-container label {
        font-size: 2.5rem;
        font-weight: 500;
        margin-top: 5px;
        margin-bottom: 10px;
        cursor: default;
    }

    #name-input {
        margin: 0 auto;
        margin-top: 10px;
        width: 500px;
        max-width: 80vw;
        font-weight: bold;
    }

    button {
        margin-top: 1rem;
    }

    #logged-in {
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 35px;
        margin-left: 40px;
        z-index: 99;

        font-weight: bold;
        font-size: 1.5rem;
        text-transform: capitalize;
    }

    #logged-in span {
        cursor: pointer;
        font-weight: normal;
        text-decoration: underline;
        font-size: 1rem;
    }
</style>
