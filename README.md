#  Course list

## Objetivo
Criar uma interface que possa mostrar uma listagem de cursos com ações de criar, deletar e atualizar estes cursos em 4 dias.

Obs:. Design criado totalmente por mim ;)

## Tech usadas
- Typescript
    - Typescript fornece uma tipagem melhor e tenho trabalhado com typescript a bastante tempo, por este motivo decidi utilizar.

- Zustand
    - Entre as opções que seria context API, redux, Recoil e zustand. Cheguei a conclusão de que o zustando seria a melhor opção devido a ele ser leve e ser bom para o objetivo que eu tinha. Embora todos os outros também pudesse me ajudar a chegar ao resultado que eu queria, alguns pontos me fizeram escolher zustand.
     - Context é muito bom, porém ele alguns problemas com re-render que não são necessários.
     - Redux é muito bom também, porém muito pesado para algo simples
     - Das minhas opções sobra Recoil e Zustand, porém tenho estudado usando Zustand e por este motivo ele levou a melhor sobre o Recoil.
- Jest
    - Embora eu não tenha tido tempo para concluir os testes, a intenção seria de adicionar os testes integrados para testar cada um dos componentes.
- Cypress
    - Da mesma forma que com o Jest, pela falta de tempo não consegui introduzir um teste end-to-end que seria de testar todo o fluxo da aplicação
- Chakra UI
    - De uma forma que faça mais sentido para vocês, utilize Chakra UI para acelerar a construção dos componentes e que também bata com diferenciais.
- React Router Dom
    - React-Router-Dom para fazer o roteamento do app
- Docker
    - Docker pra criar um container com node para rodar o app
- Atomic Designer
    - Criei uma estrutura pensando em separar o projeto e organizar ele usando o Atomic Designer, mesmo utilziando o Chakra UI que já abstrai muito os atomos por exemplo.


## TO-DO

Embora não tenha completado, a ideia é continuar atualizando este projeto, pois foi bem interessante construir uma listagem de cursos, e também integrar ele com um backend utilizando GO ou Rails(Que são as minhas stack atuais no backend) e aqui está alguns passos do que podemos fazer:

- Fazer testes de integração
- Fazer teste end-to-end
- Deixar a imagem do docker mais leve
- Organizar melhor as moleculas, pois sinto que poderiam ser melhor estruturadas
- Fazer a mostragem das horas totais de cada curso
- Mostrar nome das aulas
- Subir o projeto em algum host free
