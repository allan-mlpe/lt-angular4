//variável com JS puro
var minhaVariavel = 'minha variável';

//função com JS puro
function minhaFuncao(x, y) {
    return x + y;
}
//===============================================
var num = 2;
var PI = 3.14;

//arrows functions ==============================
var numeros = [1, 2, 3, 4, 5];

numeros.map(function (v) { return v * v; });

//classes =======================================
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
//tipagem =======================================
var op = "Name";

var op1 = "Name1";
var op2 = "Name2";
