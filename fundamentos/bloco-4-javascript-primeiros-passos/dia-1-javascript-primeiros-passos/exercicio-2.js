const custo = 1500;
const venda = 3000;

let custoTotal = custo + (custo * 0,20);
let lucro = venda - custoTotal;
let lucroProdutos = lucro * 1000;

if(custo > 0 && venda > 0) {
    console.log(lucroProdutos);
}
else {
    console.log('Erro');
}
