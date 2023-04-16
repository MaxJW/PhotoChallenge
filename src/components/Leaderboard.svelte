<script lang="ts">
    import { scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { clickOutside } from '../clickOutside.js';

    export let challengeList = [];

    let completionCounts = {};

    $: {
        completionCounts = {};
        challengeList.forEach((challenge) => {
            challenge.completed.forEach((name) => {
                if (completionCounts[name]) {
                    completionCounts[name]++;
                } else {
                    completionCounts[name] = 1;
                }
            });
        });
    }

    $: totals = Object.keys(completionCounts)
        .map((name) => {
            return {
                name: name,
                challenges_completed: completionCounts[name],
            };
        })
        .sort((a, b) => {
            return b.challenges_completed - a.challenges_completed;
        });

    let visible = false;
    let toggleIcon;

    function toggleVisibility() {
        visible = !visible;
        visible
            ? (toggleIcon.style['pointer-events'] = 'none')
            : (toggleIcon.style['pointer-events'] = 'all');
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="icon" on:click={toggleVisibility} bind:this={toggleIcon}>
    <img src="https://cdn-icons-png.flaticon.com/512/4489/4489655.png" alt="Leaderboard button" />
</div>

{#if visible}
    <table
        class="leaderboard"
        transition:scale={{ duration: 250, opacity: 0.5, easing: quintOut }}
        use:clickOutside
        on:click_outside={toggleVisibility}
    >
        <caption>Leaderboard</caption>
        <tr>
            <th>Name</th>
            <th>Challenges Completed</th>
        </tr>
        {#each totals as item}
            <tr>
                <td class="leaderboard-name">{item.name}</td>
                <td>{item.challenges_completed}</td>
            </tr>
        {/each}
    </table>
{/if}

<style>
    .icon {
        width: 70px;
        height: 70px;
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 35px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        transition: box-shadow 0.25s ease-out;
        z-index: 98;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }

    .icon:hover {
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    }

    .icon img {
        height: 70%;
        width: 70%;
        margin: auto;
    }

    .leaderboard {
        display: block;
        position: absolute;
        right: 0;
        bottom: 100px;
        margin: 35px;
        width: auto;
        height: 350px;
        overflow-y: scroll;
        border-radius: 6px;
        background-color: white;
        padding: 10px;
        z-index: 99;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        font-weight: bold;
    }

    table {
        border-collapse: collapse;
    }
    th:first-child {
        border-right: solid 2.5px var(--background);
    }
    td {
        border: solid 2.5px var(--background);
        max-width: 150px;
    }
    td:first-child {
        border-left: none;
    }
    td:last-child {
        border-right: none;
        border-bottom: none;
    }
    td:nth-last-child(2) {
        border-bottom: none;
    }

    .leaderboard caption {
        font-weight: bold;
        font-size: 20px;
    }
    .leaderboard * {
        text-align: center;
        vertical-align: middle;
    }
    .leaderboard tr td {
        width: 50%;
    }
    .leaderboard tr:nth-child(3) td:first-child {
        color: gold;
        font-size: 20px;
        font-weight: bold;
    }
    .leaderboard tr:nth-child(4) td:first-child {
        color: rgb(167, 167, 173);
        font-size: 20px;
        font-weight: bold;
    }
    .leaderboard tr:nth-child(5) td:first-child {
        color: rgb(167, 112, 68);
        font-size: 20px;
        font-weight: bold;
    }
    .leaderboard-name {
        text-transform: capitalize;
    }
</style>
