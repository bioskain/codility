// https://codility.com/demo/results/trainingDWV8XJ-MB9/
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var B=new Array(A.length+1), j;
    A.forEach((ele, i, arr) => B[ele-1] = i);
    for(j=0; j<B.length; j++) {
        if(B[j] === undefined) {
            return j+1;
        }
    }
}