//crie uma função que recebe uma string como parâmetro e retorna um array de strings onde cada item é uma letra da palavra original
//exemplo: a entrada dev gera a saída ["d","e","v"]
//crie pelo menos um teste que valide sua afirmação

export interface Letras {
    word: string[]
} 
export const fixacao = (word1: string): Letras => {
    const splitWord = word1.split("")
    return { word: splitWord}
}