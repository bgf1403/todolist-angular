export interface Tarefa {
    feita: boolean;
    descricao: string;
    prioridade: Prioridade;
}

export enum Prioridade {
    Baixa=1,
    Media=2,
    Alta=3
}