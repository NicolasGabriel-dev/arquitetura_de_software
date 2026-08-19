README.md
Atividade Prática: Refatoração de Arquitetura de Software
Aluno(a): [Nicolas Gabriel Cunha de Sousa]
Matrícula: [20240031920]

Disciplina: Arquitetura de Software - Prof. Jacqueline Teixeira

1. Análise do Código Legado e Violações Encontradas

No código original fornecido, observamos os seguintes problemas estruturais:

Alto Acoplamento Concreto: 

                Não é possível encontrar alto acoplamento concreto no código concreto.

Violação do DIP:
        
                Percebe-se no código legado a enorme dependência da classe "GeradorRelatorioLegado" ao utilizar as classes "MySQLConnection" e "SmtpEmailSender" para efetuar a conexão buscando dados financeiros no banco de dados contendo o relatório financeiro.    
        
Violação do OCP:

        A violação vista no código legado situa-se na incapacidade de  

Impossibilidade de Testes Unitários:

2. Mudanças Efetuadas e Justificativa Técnica

1. Criação de Contratos (Interfaces):
        
2. Injeção de Dependência (DI):

        A injeção de dependência vista no código legado

3. Extensão via Princípio Aberto/Fechado (OCP):

        

