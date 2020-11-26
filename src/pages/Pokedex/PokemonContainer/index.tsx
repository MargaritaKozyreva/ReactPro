import React, { useState, ChangeEvent } from 'react';
import PokemonList from '../PokemonList';
import Input from '../../../components/Input';
import Text from '../../../components/Text';
import { IPokemons } from '../../../components/interface/pokemons';

import useData from '../../../components/utils/src/hookHelpers/useData/useData';
import useDebounce from '../../../components/utils/src/hookHelpers/useDebounce/useDebounce';

import style from './PokemonContainer.module.scss';

interface IQuery {
  name?: string;
}

const PokemonContainer: React.FC = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 500)

  const { isLoading, isError, data } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: event.target.value,
    }));
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : isError ? (
    <div>Something has wrong...</div>
  ) : (
    <div>
      <div className={style.textBox}>
        <Text type="p" size="xl" design="default">
          {data && data.total} <b>Pokemons</b> for your to choose your favorite
        </Text>
      </div>

      <div className={style.inputBox}>
        <Input value={searchValue} handleOnChange={handleSearchChange} />
      </div>

      {data && <PokemonList {...data} />}
    </div>
  );
};

export default PokemonContainer;
