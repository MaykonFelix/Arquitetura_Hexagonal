import Carro from "@/core/fundamentos/Carro"
import TerminalUtil from "../util/TerminalUtil"
import Ferrari from "@/core/fundamentos/Ferrari"
import Fusca from "@/core/fundamentos/Fusca"

export default async function polimorfismo() {
    TerminalUtil.titulo("Polimorfismo")

    const [tipoCarro] = await TerminalUtil.selecao("Tipo de Carro?", [
        "Ferrari",
        "Fusca",
    ])

    const carro: Carro = tipoCarro === 0 ? new Ferrari() : new Fusca()

    while (true) {
        TerminalUtil.limpar()
        TerminalUtil.exibirChaveValor(
            "Velocidade Máxima: ",
            `${carro.velocidadeMaxima} km/h`
        )
        TerminalUtil.exibirChaveValor(
            "Velocidade Atual: ",
            `${carro.velocidadeAtual} km/h`
        )

        const [opcoes] = await TerminalUtil.selecao("Qual Opção? ", [
            "Acelerar",
            "Frear",
        ])

        // 
        //! Tranferencia direta de Controle (Polimorfismo)
        //? Como não sei qual carro o usuario vai escolher, então o metodos são os mesmo da interface, mas cada Classe tem o mesmo metodo com seu comportamento personalizado
        //

        opcoes === 0 ? carro.acelerar() : carro.frear()

        const continuar = await TerminalUtil.confirmacao("Deseja Continuar?")
        if (!continuar) return
    }
}
