export const splitBirthDate = (dateString?: string): string => {
  if (!dateString) {
    return 'Preencha seu data de nascimento';
  }
  const [year, month, day] = dateString.split('-');
  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  return `${day} de ${monthNames[parseInt(month) - 1]}`;
};
