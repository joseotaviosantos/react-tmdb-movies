export const formatDate = (dateString: string): string => {
  const date = new Date(`${dateString}T00:00:00`);
  const parsedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);

  return parsedDate;
};
