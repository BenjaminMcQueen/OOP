var IdMat3x3 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]]

function print2x2Arr(Arr) {
    for (let i = 0; i < Arr.length; i++) {
        for (let j = 0; j < Arr[i].length; j++) {
            console.log(Arr[i][j])
        }
    }
}

print2x2Arr(IdMat3x3)

function whichBigger(a, b) {
    if (a > b) {
        return a
    }
    return b
}

console.log(whichBigger(6, 9))

function isEqual(a, b) {
    if (a === b){
        return "Both values are the same.";
    }
    else if (a==b){
        return "Both values are equal, but not the same.";
    }
    return "The two values are inequivelent.";
}

console.log(isEqual(10, 10));
console.log(isEqual(10, '10'));
console.log(isEqual(10, 'ten'));