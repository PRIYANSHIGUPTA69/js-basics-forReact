let arr = [1,2,3,4,-5,-8];
//if i write ilter in map then it will return true or false every element not the array of th number which satisfies the condition

function squre(num){
    return num*num;
}

function cube(num){
    return num*num*num;
}
function odd(num){
    return num%2 == 1;
}

let newArr=arr.map(squre)  // on every element and return a new array of the size of original array
console.log(newArr)
newArr = arr.map(cube);
console.log(newArr);
console.log(arr)

newArr=arr.filter(odd); //loop on the whole array and caall its test callback or chck ondition for ever element and if the ele satisfies the condition the filter push that llemnt into the new arr
console.log(newArr);
console.log(arr)

function Pos(num){
    return num>0
}
newArr = arr.filter(Pos);
let sqr =newArr.map(squre);
console.log(sqr)