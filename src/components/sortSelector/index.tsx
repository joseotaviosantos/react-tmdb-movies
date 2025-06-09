import { SelectorContainer } from './styles';

export enum SortOption {
  titleAsc = 'title-asc',
  titleDesc = 'title-desc',
  averageAsc = 'average-asc',
  averageDesc = 'average-desc',
}

interface ISortSelectorProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const SortSelector = ({ value, onChange }: ISortSelectorProps) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as SortOption);
  };

  return (
    <SelectorContainer value={value} onChange={handleSelectChange}>
      <option value={SortOption.titleAsc}>{'Título (A-Z)'}</option>
      <option value={SortOption.titleDesc}>{'Título (Z-A)'}</option>
      <option value={SortOption.averageAsc}>{'Maior Nota'}</option>
      <option value={SortOption.averageDesc}>{'Menor Nota'}</option>
    </SelectorContainer>
  );
};
