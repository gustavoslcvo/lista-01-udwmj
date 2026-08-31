const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu nome: ", (nome) => {
    rl.question("Digite sua idade: ", (idade) => {
        console.log(`\nOlá, ${nome}!`);
        console.log(`Você tem ${idade} anos.`);
        
        if (idade >= 18) {
            console.log("Você é maior de idade.");
        } else {
            console.log("Você é menor de idade.");
        }

        rl.close();
    });
});