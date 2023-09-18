export interface extractUse {
  id_row: string;
  nome: string;
  data_liberacao: Date;
  cpf: string;
  cod_id: string;
  nome_mae: string;
  data_nascimento: Date;
  idade: number;
  ds_idade: string;
  faixa_etaria: string;
  sexo: string;
  status: string;
  modalidade: string;
  pais: string;
  contatos: string;
  bairro: string;
  cidade: string;
  logradouro: string;
}

export interface familiar {
  id_pessoa: string;
  pessoa_nome: string;
  pessoa_cpf: string;
  pessoa_data_nascimento: Date;
  pessoa_contato: string;
  pessoa_bairro: string;
  pessoa_rg: string;
  pessoa_cidade: string;
  pessoa_logradouro: string;
  pessoa_cep: string;
  pessoa_numero_residencial: string;
  familiar_nome: string;
  familiar_cpf: string;
  familiar_vinculo: string;
  familiar_id: string;
}

export interface IBeneficiary {
  id_row: BigInt;
  nome: string;
  data_criacao: Date;
  cpf: string;
  cod_id: string;
  nome_mae: string;
  data_nascimento: string;
  sexo: string;
  status: string;
  modalidade: string;
  pais: string;
  contatos: string;
  bairro: string;
  cidade: string;
  logradouro: string;
  familiar: familiar[];
  extractUse: extractUse[];
}
