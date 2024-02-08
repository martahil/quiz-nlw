const perguntas = [
    {
      pergunta: "O que significa a sigla DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Manipulation",
        "Dynamic Output Module",
      ],
      correta: 0
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "variable",
        "var",
        "varex",
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "log()",
        "print()",
        "display()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é closure em JavaScript?",
      respostas: [
        "Uma função que é usada para fechar o programa",
        "Um tipo de loop",
        "Uma função que tem acesso a variáveis externas a ela",
      ],
      correta: 2
    },
    {
      pergunta: "Qual operador é usado para comparar tanto o valor quanto o tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Como se refere a um bloco de código que é executado repetidamente até que uma condição seja atendida?",
      respostas: [
        "Switch",
        "If",
        "While",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        "OU lógico",
        "E lógico",
        "NÃO lógico",
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Array",
        "Object",
        "String",
      ],
      correta: 2
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function myFunction()",
        "declare function myFunction()",
        "var myFunction()",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  /*no Set pode-se adicionar ou tirar, mas nunca repetir o que tem dentro dele */ /*no caso, não haverá repetição da informação ao selecionar as alternativas, ou em casos de trocar de uma alternativa para outra*/
  const corretas = new Set()
  
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span') /*pegar o span dentro da div acertos*/
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    // alert(item.pergunta)
    const quizItem = template.content.cloneNode(true) /*node são as tags do html*/
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
  /*Faz com que eu marque a alternativa correta de uma questão sem desmarcar a alternativa de outra questão*/
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  
  /*Atualmente todas as alternativas (1 2 e 3) tem value=0* (ver no console do F12)*/
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
  /*verificar a ação (evento) que está ocorrendo na tela, no caso mudança de input*/ 
  /* => "arrow function" */
  /*event.target, neste caso, é um input selecionado*/
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
    /*alert(estaCorreta)*/ /*indica se a resposta selecionada está correta ou falsa (true or false)*/
     corretas.delete(item) /*se por ex., selecionar a resposta correta na pergunta 01, depois trocar a alternativa selecionada e responder errado, irá subtrair do número de respostas corretas*/
    if(estaCorreta) { /*computar todas as perguntas que acertou*/
    corretas.add(item)
    }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    // alert(corretas.size)
  }
    /*coloca as três alternativas de resposta na tela*/
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  /*remove "Resposta A" como item que aparece antes das 3 alternativas de respostas*/
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }