export class Aluno {

    /*
        declarando os atributos dentro do construtor.
        também poderíamos declará-los fora, como é
        feito em Java, por exemplo.
    */
    constructor(
        public id: number,
        public nome: string,
        public email: string
    ) { }
}