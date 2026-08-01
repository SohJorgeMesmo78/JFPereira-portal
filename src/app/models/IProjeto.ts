export interface IProjeto {
  nome: string;
  descricao: string;
  tecnologias: readonly string[];
  github: string;
  site: string;
  backend?: string;
  backendSite?: string;
  imagem?: string;
}
