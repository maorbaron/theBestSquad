// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189



function reverseString(str){
    const result = [];
    for (let i = 0 ; i <= Math.floor( str.length / 2) ; i++) {
        result[str.length - (i +1)] = str[i];
        result[i] = str[str.length - (i +1) ]
    }
    return result.join('')
}

function reverseInt(int){
    //validations
    if (int === null || int === undefined || typeof int !== 'number'){
        return 'Input is missing Or corrupted'
    }
    const strInt = int < 0 ? int.toString().split('-')[1] : int.toString();
    if (int<0){
        return +reverseString(strInt) * -1;
    } else{
        return +reverseString(strInt);
    }
}
const m = reverseInt(4);
console.log(m)

