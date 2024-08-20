const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const tetoResultado = document.querySelector(".texto-resultado");

const perguntas = [
      {
         enunciado: " Assim que saiu da escola Gabriel se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, o chat também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento de Gabriel?",
        alternativa:[
            "Isso é assustador!",
            "Isso é maravilhoso!"
        ]
    },
    {
       enunciado: "Com a descoberta desta tecnologia uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre IA. No fim de uma aula ela pede que Gabriel escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude Gabriel toma?",
       alternativa:[
        "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
        "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema."
       ]
    },
    {
        enunciado: "pergunta 1",
       alternativa:[
           "alternativa 1",
           "alternativa 2"
       ]
   },
   {
    enunciado: "pergunta 1",
   alternativa:[
       "alternativa 1",
       "alternativa 2"
   ]
},
{
    enunciado: "pergunta 1",
   alternativa:[
       "alternativa 1",
       "alternativa 2"
   ]
},
];

let atual = 0; 
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual =perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}