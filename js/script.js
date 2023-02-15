'use strict';

const arr = [1, 2, 3, -1, -2, -3];
const newArray = function (yourArray){
    const exampleArr = [];
    if (yourArray.length == 0){
        return 'array is empty';
    }
    for(let i = 0; i < yourArray.length; i++){
        if (yourArray[i] > 0){
            exampleArr.push(yourArray[i]);
        }
    }
    if (exampleArr.length > 0){
        return exampleArr;
    } else if (exampleArr.length == 0){
        return null;
    }
};
console.log(newArray([-1, -2, -4, 10, -4, 4, 1, 4]));