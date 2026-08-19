"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MySQLConnection {
    buscarDadosFinanceiros() {
        console.log("[INFRA] Conectando ao MySQL e buscando lançamentoos...");
        return ["Receita: R$15.000.00", "Despesa: R$8.200,00", "Lucro: R$6.800,00"];
    }
}
class SmtpEmailSender {
    enviarEmail(destino, mensagem) {
        console.log("[INFRA] Enviando email para ${ destino } com a mensagem: ${ mensagem }");
    }
}
class GeradorRelatorioLegado {
    processarEMandar(destino) {
        // VIOLACAO: Acoplamento rígido via operador 'new'
        const banco = new MySQLConnection();
        const emailSender = new SmtpEmailSender();
        //VIOLACAO: Baixa coesão (orquestra regra de negócio e infraestrutura)
        const dados = banco.buscarDadosFinanceiros();
        const relatorioFormatado = '--- RELATÓRIO FINANCEIRO ---\n${dados.join("\n")}';
        emailSender.enviarEmail(destino, relatorioFormatado);
    }
}
//# sourceMappingURL=index.js.map