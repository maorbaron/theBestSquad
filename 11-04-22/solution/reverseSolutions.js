// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



//Solution 1

function reverseString(str){
    const result = [];
    if (!str || typeof str !== 'string') {
        return 'ERROR'
    }
    const halfLength = Math.floor(str.length / 2);
    for (let i = 0; i <= halfLength; i++){
        result[str.length - (i +1)] = str[i];
        result[i] = str[str.length - (i +1) ]
    }
    return result.join('');
}

const res = reverseString('hello');
console.log(res);

//