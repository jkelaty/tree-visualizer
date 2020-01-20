/* Taken from Stackoverflow */
export function randomIntFromInverval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}