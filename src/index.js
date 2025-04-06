// |---------------------------------------------------------------------------|
// Завдання 1

// "Порівняння кількох промісів"

// >>>>>
function delayedPromise(content, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(content);
        }, delay)
    })
}

const promiseA = delayedPromise("<<A>>", 1000);
const promiseB = delayedPromise("<<B>>", 2000);
const promiseC = delayedPromise("<<C>>", 3000);
const promiseD = delayedPromise("<<D>>", 4000);
const promiseE = delayedPromise("<<E>>", 5000);

Promise.all([promiseA, promiseB, promiseC, promiseD, promiseE])
    .then(value => {console.log(value)})
    .catch(error => {console.error(error)});
// <<<<<



// |---------------------------------------------------------------------------|



// Завдання 2

// "Змагання промісів"
// >>>>>
function randomDelay(content) {
    return new Promise(resolve => {
        let delay = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
        setTimeout(() => {
            resolve(content)
        }, delay);
    })
}

const playerPromis1 = randomDelay("1 Player Promis");
const playerPromis2 = randomDelay("2 Player Promis");
const playerPromis3 = randomDelay("3 Player Promis");
const playerPromis4 = randomDelay("4 Player Promis");
const playerPromis5 = randomDelay("5 Player Promis");

Promise.race([playerPromis1, playerPromis2, playerPromis3, playerPromis4, playerPromis5])
    .then(value => {console.log(`Winner >>> ${value} <<<`)})
    .catch(error => {console.error(error)});
// <<<<<

// |---------------------------------------------------------------------------|