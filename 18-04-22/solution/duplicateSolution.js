let obj = [
    {name:'maor', age:38},
    {name:'benja', age:35},
    {name:'shai', age:22},
    {name:'benja', age:35},
    {name:'dan', age:35}
]

function isDuplicated(arr) {
    //Validation for the input always needed !!!
    const data = {};
    for (let obj of arr) {
        const str = obj.name + obj.age;
        if( data[str] ) {
            return true;
        }
        else {
            data[str] = 1;
        }
    }
    return false;
}
console.log(isDuplicated(obj))
