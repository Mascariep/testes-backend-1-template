import {fixacao} from '../src/fixacao'

//crie uma função que recebe uma string como parâmetro e retorna um array de strings onde cada item é uma letra da palavra original
//exemplo: a entrada dev gera a saída ["d","e","v"]
//crie pelo menos um teste que valide sua afirmação

describe("Testar o arquivo fixacao", () => {
    test("a função deve separar a palavra dev em d.e.v", () => {
        const palavra = "dev";
        const resultEsperado = { word: ["d","e","v"]};
        const resultReal = fixacao(palavra);
        
        expect(resultReal).toEqual(resultEsperado);
    })
})