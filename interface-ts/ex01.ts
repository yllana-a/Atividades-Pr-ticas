// Sistema de Agendamento de Consultas

// 01 -Definir Interface - OKK

// Criar interface com todos os campos (obrigatórios, opcionais e que aceitam null)

// 02 - Criar Array Tipado

// Implementar array tipado com a interface para armazenar os registros - OKK

// 03 - Implementar CRUD

// Desenvolver funções de CRUD (cadastrar, listar, atualizar, excluir/concluir)

// 04 - Testar Fluxo

// Criar alguns objetos e executar no console para validar funcionamento

//Descrição: Criar um programa que gerencie consultas médicas ou de serviços.

//Interface Consulta

//Campos obrigatórios: id (string), paciente (string), data (Date)

//Campos opcionais: observacoes?: string, dataCancelamento?: Date | null

//Status: status: "agendada" | "concluída" | "cancelada"

//Funções

//agendarConsulta() → cria uma nova consulta

//cancelarConsulta() → recebe id e atribui dataCancelamento

// listarConsultas() → exibe todas as consultas com status

// listarPorStatus(status: string) → filtra por status

// Uso de null/undefined e union: dataCancelamento inicia como null e só recebe valor quando cancelada. observacoes é opcional e pode ser undefined.

interface Consulta {
  id: string,
  paciente: string,
  data: Date,
  observacoes?: string,
  dataCancelamento?: Date | null,
  status: "agendada" | "concluída" | "cancelada",
}

const paciente1: Consulta = {
  id: 001,
  paciente: Paulo Ricardo,
  data: 22/08/2025,
  observacoes?:,
  dataCancelamento?:,
  status: "agendada",
}

const paciente2: Consulta = {
  id: 002,
  paciente: Joana Maria,
  data: 05/08/2025,
  observacoes?: vem de acompanhante,
  dataCancelamento?:,
  status: "concluída",
}
agendarConsulta()

