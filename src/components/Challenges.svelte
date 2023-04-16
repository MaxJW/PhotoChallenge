<script lang="ts">
    import { db } from '../firebase.js';
    import { collection, doc, updateDoc, getDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
    import { toast } from '@zerodevx/svelte-toast';
    import Leaderboard from './Leaderboard.svelte';

    export let name;

    let dbName = 'challenges';

    let randomChallenge = { id: '', name: 'Loading...', completed: [] };
    let challengeList = [];

    let recentlySelected = []; // Array to keep track of recently selected challenges
    let recentThreshold = 6; // Number of previous selections to consider as "recent"

    const collRef = collection(db, dbName);
    const unsub = onSnapshot(collRef, (coll) => {
        challengeList = [];
        coll.forEach((doc) => {
            challengeList.push({
                id: doc.id,
                name: doc.data().name,
                completed: doc.data().completed,
            });
            if (randomChallenge && randomChallenge.id && randomChallenge.id == doc.id) {
                randomChallenge = {
                    id: doc.id,
                    name: doc.data().name,
                    completed: doc.data().completed,
                };
            }
        });
        if (!randomChallenge || randomChallenge.name == 'Loading...') {
            selectRandomString();
        }
        if (recentThreshold >= challengeList.length) {
            recentThreshold = challengeList.length - 1;
        }
    });

    function selectRandomString() {
        let oldChallenge = randomChallenge;
        while (
            randomChallenge.id == oldChallenge.id ||
            recentlySelected.includes(randomChallenge.id)
        ) {
            randomChallenge = challengeList[Math.floor(Math.random() * challengeList.length)];
        }
        recentlySelected.push(randomChallenge.id);
        if (recentlySelected.length > recentThreshold) {
            recentlySelected.shift(); // Remove the oldest item from the array if it exceeds the threshold
        }
    }

    async function completeChallenge() {
        if (randomChallenge.completed.includes(name)) {
            toast.push('🚧 Challenge already completed!');
            return;
        }
        const challengedoc = doc(db, dbName, randomChallenge.id);
        const docSnap = await getDoc(challengedoc);

        if (docSnap.exists()) {
            await updateDoc(challengedoc, {
                completed: arrayUnion(name),
            }).then(() => {
                toast.push('✅ Challenge completed!');
            });
        } else {
            toast.push('🚨 Unable to complete challenge, try again or refresh!');
        }
    }
</script>

<Leaderboard {challengeList} />

<div class="container">
    <div class="heading">
        {#if randomChallenge && randomChallenge.name && randomChallenge.completed}
            <div class="challenge-block">
                <h2>Take a photo of...</h2>
                <h1 class="challenge">{randomChallenge.name}</h1>
                <h3>Completed by:</h3>
                <h2 class={randomChallenge.completed.length > 0 ? 'completers' : ''}>
                    {randomChallenge.completed.length > 0
                        ? randomChallenge.completed.join(', ')
                        : 'Not completed by anyone yet!'}
                </h2>
            </div>
        {/if}
        <button on:click={selectRandomString}>🔃 New Challenge</button>
        <button on:click={completeChallenge}>✅ Complete Challenge</button>
    </div>
</div>

<style>
    h1 {
        min-height: 56px;
    }

    .container {
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
        padding-left: 30px;
        padding-right: 30px;
    }

    .heading {
        text-align: center;
        pointer-events: all;
    }

    .completers {
        text-transform: capitalize;
    }

    .challenge-block {
        margin-bottom: 2rem;
    }
</style>
