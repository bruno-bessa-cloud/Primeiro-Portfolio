let idade = 24;
let temLicença = false;

if (idade >= 18 && temLicença){
    console.log("Você pode conduzir");
} else if (idade >= 18 && !temLicença) {
    console.log("Maior de idade, mas não pode conduzir (Não Tem carta de condução).");
} else {
    console.log("Você não pode conduzir");
}