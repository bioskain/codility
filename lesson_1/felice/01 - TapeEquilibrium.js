// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    

var i = 0, j = A.length-1;
//prima iterazione
var arrayDelleSommeAndata = [A[i]];
var arrayDelleSommeRitorno = [A[j]];
var sommeAbs = [];
i=i+1;
j=j-1;

for(; i < A.length-1; i++, j--) {
    arrayDelleSommeAndata[i] = arrayDelleSommeAndata[i-1] + A[i];
	arrayDelleSommeRitorno[i] = arrayDelleSommeRitorno[i-1] + A[j];		
}
i = 0, j = arrayDelleSommeAndata.length-1;
var sommaAbs = 0;
var result = 64535;
for(; i < arrayDelleSommeAndata.length; i++,j--) {
    sommaAbs = Math.abs(arrayDelleSommeAndata[i] - arrayDelleSommeRitorno[j]);
	if(result > sommaAbs) {
		result = sommaAbs;
	}
}
return result;
}