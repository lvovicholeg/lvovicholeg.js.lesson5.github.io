
function primeNumber(pn) {
    if (pn < 1) {
        document.write(`<h3 style=color:red>Неможливо! "${pn}" не є простим числом, просте число повинно бути натуральним, тобто більше 0<\h3>`)
    }
    else if (pn == 1){
        document.write(`<h3 style=color:red>Число "${pn}" не є простим числом, прості числа повинні ділитись рівно на 2 числа(саме на себе і на одиницю) <br> "1" підпадає під цей принцип, але це одне і те ж число, тому "1" не є простим числом.<\h3>`)
    }
    else if (pn != 0 && pn < 0 == false && pn > 0 == false){
        document.write(`<h1 style=color:red> Ти ввів не число <\h1>`);
    }
    else {
        let remainder = 1;
        let i = pn - 1;
        while (remainder >= 1 && i > 1) {
            remainder = pn % i;
            i--;
        }
        if (remainder == 0) {
            document.write(`<h1 style=color:red>Число "${pn}" не є простим<\h1>`)
        }
        else {
            document.write(`<h1 style=color:green>Число "${pn}" є простим<\h1>`)
        }
    }
}

primeNumber(prompt('Введіть число'));