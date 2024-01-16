const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) { 
    null1 = '';
    for (let b = 0; b < length; b++) {
        let mathRandom = Math.floor(Math.random() * characters.length);
        null1 = null1 + characters[mathRandom];
    }
    return null1; 
}   
const key = generateKey(16, characters);
console.log(key);