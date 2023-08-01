export interface IUserResponse {
  login: string;
  data_hora_criacao: Date;
  data_hora_remocao: Date | null;
  dt_ultimo_login: Date | null;
  nome: string;
  perfil_id: number;
  perfil: {
    id: number;
    data_hora_criacao: Date;
    data_hora_remocao: Date | null;
    nome: string;
    padrao: boolean;
    tipo_perfil: string;
  };
}
