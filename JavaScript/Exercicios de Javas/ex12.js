let arr = [1, 2, 3, 4, 5, 11, 20, 40, 50, 100];
let contador = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] > 10){
        contador++
    }
}
console.log(contador);