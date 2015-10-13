// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var com = [], i;
    for(i = 0; i < A.length; i++) {
        com[A[i]-1] = true;
    }
    var result = com.length+1;
    for(i = 0; i < com.length; i++) {
        if(com[i]!== true) {
            result = i+1;
            break;
        }
    }
    return result;
}
