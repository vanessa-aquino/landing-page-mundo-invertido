import { subscribeToHellfireClub } from './firebase/hellfire-club.js';

const name = document.getElementById('txtName');
const email = document.getElementById('txtEmail');
const level = document.getElementById('txtLevel');
const character = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: name.value,
        email: email.value,
        level: level.value,
        character: character.value,
    }
    const subscriptionId = await subscribeToHellfireClub(subscription);

    name.value = '';
    email.value = '';
    level.value = '';
    character.value = '';

})  