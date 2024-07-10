

const perguntas = [
    {
        pergunta: "Qual é a principal função do serviço social?",
        respostas: [
            "A) Prestar serviços de limpeza",
            "B) Promover a justiça social e a inclusão",
            "C) Vender produtos para arrecadar fundos",
            "D) Realizar eventos sociais",
        ],
        correta: 1
    },
    {
        pergunta: "Quem é considerado o pai fundador do Serviço Social?",
        respostas: [
            "A) Karl Marx",
            "B) Max Weber",
            "C) Auguste Comte",
            "D) Osvaldo Cruz",
        ],
        correta: 3
    },
    {
        pergunta: "O que é o Código de Ética do Assistente Social?",
        respostas: [
            "A) Um manual de receitas",
            "B) Um documento que orienta a conduta profissional",
            "C) Um guia de viagens",
            "D) Um tratado filosófico",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o objetivo da intervenção profissional em serviço social?",
        respostas: [
            "A) Manter o status quo",
            "B) Garantir a desigualdade",
            "C) Transformar a realidade social",
            "D) Ignorar os problemas sociais",
        ],
        correta: 2
    },
    {
        pergunta: "O que é o SUAS?",
        respostas: [
            "A) Sistema Universal de Acesso à Saúde",
            "B) Sistema Único de Assistência Sindical",
            "C) Sistema Único de Assistência Social",
            "D) Sistema Único de Acesso à Segurança",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o papel do profissional de serviço social na garantia dos direitos humanos?",
        respostas: [
            "A) Negar os direitos humanos",
            "B) Defender apenas os direitos individuais",
            "C) Contribuir para a efetivação dos direitos humanos",
            "D) Focar apenas nos direitos civis",
        ],
        correta: 2
    },
    {
        pergunta: "O que é o PAIF?",
        respostas: [
            "A) Programa de Apoio à Inovação Fiscal",
            "B) Projeto de Atenção aos Idosos e Famílias",
            "C) Proteção e Atendimento Integral à Família",
            "D) Plano de Ação para Inclusão Financeira",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o significado da expressão Empoderamento no contexto do serviço social?",
        respostas: [
            "A) Enfraquecer as pessoas",
            "B) Fortalecer as pessoas, concedendo poder e autonomia",
            "C) Ignorar as questões de poder",
            "D) Controlar as pessoas",
        ],
        correta: 1
    },
    {
        pergunta: "O que significa a sigla CRAS?",
        respostas: [
            "A) Centro de Recreação para Animais Selvagens",
            "B) Centro de Referência para Atendimento Social",
            "C) Centro de Reabilitação para Adictos Sociais",
            "D) Centro de Regulação de Atividades Sociais",
        ],
        correta: 1
    },
    {
        pergunta: "O que é a LOAS (Lei Orgânica da Assistência Social)?",
        respostas: [
            "A) Lei Orgânica do Atendimento Social",
            "B) Lei de Organização para Ações Sociais",
            "C) Lei Orgânica da Assistência Sindical",
            "D) Lei Orgânica da Assistência Social",
        ],
        correta: 3
    },
    {
        pergunta: "Qual é a importância do diálogo interdisciplinar no serviço social?",
        respostas: [
            "A) Não é importante",
            "B) Dificulta o trabalho profissional",
            "C) Facilita a compreensão e abordagem das demandas sociais de forma integrada",
            "D) Limita a atuação profissional",
        ],
        correta: 2
    },
    {
        pergunta: "O que é o PNAS (Plano Nacional de Assistência Social)?",
        respostas: [
            "A) Plano Nacional de Ações Sociais",
            "B) Plano Nacional de Assistência Sindical",
            "C) Plano Nacional de Assistência ao Sujeito",
            "D) Plano Nacional de Assistência Social",
        ],
        correta: 3
    },
    {
        pergunta: "Qual é a diferença entre a abordagem individual e a abordagem coletiva no serviço social?",
        respostas: [
            "A) Não há diferença",
            "B) A abordagem individual foca em casos específicos, enquanto a abordagem coletiva atua em questões sociais mais amplas",
            "C) A abordagem coletiva é ineficaz",
            "D) A abordagem individual é mais importante",
        ],
        correta: 2
    },
    {
        pergunta: "O que são as políticas sociais no contexto do serviço social?",
        respostas: [
            "A) Ações exclusivamente governamentais",
            "B) Estratégias para manter a desigualdade",
            "C) Conjunto de medidas que visam atender demandas sociais e garantir direitos",
            "D) Medidas para restringir o acesso aos serviços sociais",
        ],
        correta: 3
    },
    {
        pergunta: "Para o serviço social o Projeto Ético-Político é",
        respostas: [
            "A) Um plano de negócios",
            "B) Uma abordagem técnica",
            "C) Um compromisso com a ética apenas",
            "D) Um conjunto de valores e princípios orientadores da prática profissional",
        ],
        correta: 3
    },
];


const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")
const corretas = new Set() 
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

//loop do array de perguntas
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.pergunta


    //loop do array de respostas
    for (let resposta of item.respostas) {
        //clonando
        const dt = quizItem.querySelector("dl dt").cloneNode(true)
        dt.querySelector("span").textContent = resposta



        //Trabalhando a opção do input para que desmarque ao escolher uma opção
        
        dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
        dt.querySelector("input").value = item.respostas.indexOf(resposta)
  //codigo adicionado


        //observe a mudança do evento
        dt.querySelector("input").onchange = (evet) => {

            //comparando para saber se a resposta está correta - será true ou false
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas


        }



        quizItem.querySelector("dl").appendChild(dt)
    }
    //remove o texto no span dentro do (dl dt) no html
    quizItem.querySelector("dl dt").remove()

    //colocar perunta e resposta na tela
    quiz.appendChild(quizItem)

}

