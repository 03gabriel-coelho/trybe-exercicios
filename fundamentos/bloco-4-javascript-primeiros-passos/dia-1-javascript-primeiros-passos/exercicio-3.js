const salario = 3000;
let salarioINSS;
let salarioIR;

if(salario < 1556.94) {
    salarioINSS = salario - (salario * 0.08);
}
else if(salario >= 1556.95 && salario < 2594.92) {
    salarioINSS = salario - (salario * 0.09);
}
else if(salario >= 2594.93 && salario < 5189.82) {
    salarioINSS = salario - (salario * 0.11);
}
else {
    salarioINSS = salario - 570.88;
}


if(salarioINSS < 1903.98) {
    salarioIR = salarioINSS;
}
else if (salarioINSS >= 1903.98 && salarioINSS < 2826.65) {
    salarioIR = salarioINSS - ((salarioINSS * 0.075) - 142.80);
}
else if (salarioINSS >= 2826.65 && salarioINSS < 3751.05) {
    salarioIR = salarioINSS - ((salarioINSS * 0.15) - 354.80);
}
else if (salarioINSS >= 3751.05 && salarioINSS < 4664.68) {
    salarioIR = salarioINSS - ((salarioINSS * 0.225) - 636.13);
}
else {
    salarioIR = salarioINSS - ((salarioINSS * 0.275) - 869.36);
}

console.log(salarioIR);

