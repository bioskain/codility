// https://codility.com/demo/results/training5NNF2V-KZ2/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var i, B=new Array(A.length+1);
    A.forEach((currentValue, index) => B[currentValue] = index);
    for(i = 1; i < B.length; i++) {
        if(B[i] === undefined)
            return 0;
    }
    return 1;
}