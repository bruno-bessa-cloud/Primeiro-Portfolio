let temChave = true;
let portaTrancada = false;
let podeAbrir = temChave && !portaTrancada;
let precisaAjuda = !temChave || portaTrancada;

console.log("Pode abrir a porta: " + podeAbrir);
console.log("Precisa de ajuda: " + precisaAjuda);