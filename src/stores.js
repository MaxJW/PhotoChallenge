import { localStore } from './localStore.js'

//Store first launch values for ToDos, Projects, and Timers
const nameVal = '';
const tutorialDone = false;

//Export all initial values to cookies (using localStore.js)
export const name = localStore('pc-name', nameVal);
export const tutorial = localStore('pc-tutorial', nameVal);