let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let numeromaior = 0;
let numeromenor;
let numeroimpar = [];
for(index = 0; index < numbers.length; index +=1) {
    resultado += numbers[index] / numbers.length; 
}
if (resultado > 20) {
    console.log('valor maior que 20')
}
else {
    console.log('valor menor ou igual a 20')
}

for(index1 = 0; index1 < numbers.length; index1 +=1) {
    for(index2 = 1; index2 < numbers.length; index2 +=1) {
        if(numbers[index2] > numbers[index1] && numbers[index2] > numeromaior) {
           numeromaior = numbers[index2];
        }
     
    } 
}

for(index3 = 0; index3 < numbers.length; index3 += 1){
    if (numbers[index3] % 2 !== 0) {
        numeroimpar.push(numbers[index3])
    }
}

if(numeroimpar.length > 0) {
    console.log('quantidade de números ímpares:', numeroimpar.length);
}
else {
    console.log('nenhum valor impar encontrado');
}

for(index4 = 0; index4 < numbers.length; index4 += 1) {
    if(index4 === 0){
        numeromenor = numbers[0];
    }
    for(index5 = 1; index5 < numbers.length; index5 += 1) {
        if(numbers[index4] < numbers[index5] && numbers[index4] < numeromenor) {
            numeromenor = numbers[index4];
        }
    }
}






 console.log('tá ai:', resultado);
 console.log('numero maior:', numeromaior);
 console.log('numero menor:', numeromenor);
