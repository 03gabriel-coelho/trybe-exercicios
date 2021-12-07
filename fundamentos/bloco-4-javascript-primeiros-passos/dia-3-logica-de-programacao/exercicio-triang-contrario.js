let n = 5;
let ast = '*';
let resultado = '';

for(index = 1; index <= n; index += 1){
    resultado += ' ';
}
for(index1 = 1; index1 <= n; index1 += 1){
    resultado -= ' ';
}

for(index2 = 1; index2 <= n; index2 += 1){
    resultado += ast;
    console.log(resultado);
}




