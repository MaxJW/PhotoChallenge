<script lang="ts">
    import { db } from '../firebase.js';
    import { collection, doc, updateDoc, getDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
    import { toast } from '@zerodevx/svelte-toast';

    export let name;

    let dbName = 'challenges';

    let randomChallenge = { id: '', name: 'Loading...', completed: [] };
    let stringList = [];

    const collRef = collection(db, dbName);
    const unsub = onSnapshot(collRef, (coll) => {
        stringList = [];
        coll.forEach((doc) => {
            stringList.push({ id: doc.id, name: doc.data().name, completed: doc.data().completed });
            if (!randomChallenge || randomChallenge.name == 'Loading...') {
                selectRandomString();
            }
            if (randomChallenge.id == doc.id) {
                randomChallenge = {
                    id: doc.id,
                    name: doc.data().name,
                    completed: doc.data().completed,
                };
            }
        });
    });

    function selectRandomString() {
        let oldChallenge = randomChallenge;
        while (randomChallenge == oldChallenge) {
            randomChallenge = stringList[Math.floor(Math.random() * stringList.length)];
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

<div class="container">
    <div class="heading">
        {#if randomChallenge && randomChallenge.name && randomChallenge.completed}
            <div class="challenge-block">
                <h2>Your challenge is:</h2>
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
