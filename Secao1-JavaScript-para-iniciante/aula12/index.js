let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // D

/*
//maneira mais antiga de se resolver isso
const varATemp = varA;
varA = varB;
varB = varC; 
varC = varATemp; 
*/

//maneira mais nova e moderna de se resolver isso
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
