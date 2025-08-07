let mediaDolphins = 96 + 108 + 89 / 3;
let scoreDolphins = mediaDolphins;
console.log("Média dos Dolphins", scoreDolphins);

let mediaKoalas = 88 + 91 + 110 / 3;
let scoreKoalas = mediaKoalas;
console.log("Média dos Koalas", scoreKoalas);

if (scoreDolphins > scoreKoalas){
    console.log("Os Dolphins ganham o troféu");
} else if (scoreDolphins == scoreKoalas) {
    console.log("Ambos ganham o troféu");
 } else {
     console.log("Os Koalas ganham o troféu");
 }