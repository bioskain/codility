// https://codility.com/demo/results/trainingY99536-YH3/
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var t;
    var positions=[];
    for(t = 0; t < A.length; t++) {
        if(positions[A[t]] === undefined) {
            positions[A[t]] = t;
        }
    }
    positions[0]=0;
    var time = 0;
	if(positions.length-1 < X) {
		return -1;
	}
    for(t = 0; t < positions.length; t++) {
        if(positions[t] === undefined) {
            return -1;
        }
		if(positions[t] > time) {
            time = positions[t];
        }
    }
	return time;
}