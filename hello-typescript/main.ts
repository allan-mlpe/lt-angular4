/**
 * O código deste arquivo será convertido para 
 * o arquivo main.js por meio do comando:
 * 
 * $ tsc main.ts
 * 
 */

//variável com JS puro
var minhaVariavel = 'minha variável';

//função com JS puro
function minhaFuncao(x, y) {
    return x+y;
}
//===============================================
//EcmaScript 6 ou EcmaScript 2015
let num = 2;
const PI = 3.14;

//arrows functions ==============================
var numeros = [1, 2, 3, 4, 5];

//com ES6/ES2015
numeros.map(v => v*v);
/*
numeros.map(v => {
    v*V
});
*/

//classes =======================================
class Matematica {
    soma(x, y) {
        return x+y;
    }
}

//tipagem =======================================
var op: string = "Name";

//sem tipagem podemos omitir o tipo ou usar a keyword 'any'
var op1 = "Name1";
var op2: any = "Name2";