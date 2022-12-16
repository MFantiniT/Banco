const read = require('readline-sync')
class Cliente {
    constructor(cliente, idade, chavePix, saldo) {
        this.cliente = cliente,
            this.idade = idade,
            this.chavePix = chavePix,
            this.saldo = saldo
    }
    mostrarDados() {
        console.log(`Nome: ${this.cliente}
        ---------------------
        Idade: ${this.idade}
        ---------------------
        Chave Pix: ${this.chavePix}
        ---------------------
        Saldo: ${this.saldo}
        ---------------------`)
    }
    adicionarSaldo(valor) {
        this.saldo += valor
        console.log('Seu saldo agora é de ' + this.saldo + 'Reais')
    }
    transferenciaTed() {
        let conta = read.question(`Digite o numero da conta na qual deseja fazer a transferencia.`)
        let valor = read.question('Qual valor deseja transferir?')
        this.saldo -= valor
        console.log(`você transferiu ${valor} reais, para a conta ${conta}
                    seu saldo agora é de ${this.saldo}`)
    }
    transferenciaPix() {

        let pixtransferencia = (read.question("digite a chave pix na qual deseja enviar o valor"))
        let valor = read.question('qual valor deseja enviar?')
        this.saldo -= valor
        console.log(`você fez um pix no valor de ${valor} reais, para a chave ${pixtransferencia}
                    seu saldo agora é de: ${this.saldo} reais`)
    }


    fazerTransferencia() {
        let opcao = read.question(`digite 1 para transferencia TED
        digite 2 para transferencia PIX`)
        if (opcao === '1') {
            this.transferenciaTed()
        }
        if (opcao === '2') {
            this.transferenciaPix()
        }

    }
}

matheus = new Cliente('Matheus Fantini Teixeira', 27, 09600978999, 3200)
verdadeiro = true
while (verdadeiro) {
    caixaEletronico = read.question(`o que deseja fazer?
digite 1 - para ver os dados da conta
digite 2 - para depositar dinheiro
digite 3 - para fazer uma transferencia
`)
    if (caixaEletronico === "1") {
        matheus.mostrarDados()
    }
    else if (caixaEletronico === "2") {
        valor = read.question('qual valor você deseja depositar?')
        matheus.adicionarSaldo(valor)
    }
    else if (caixaEletronico === "3") {
        matheus.fazerTransferencia()
    }
    continuar = read.question('deseja fazer outra operação?' + ' S - SIM / N - Não')
    if (continuar === "S") {
        continue;
    }
    else {
        verdadeiro = false
    }
}
