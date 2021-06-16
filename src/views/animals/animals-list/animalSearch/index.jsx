import { SearchBar } from 'react-native-elements';
import React,{useState} from 'react';
import useAnimalContext from 'storages/animal/context';

const AnimalSearch = () => {

    const {fetchAnimal} = useAnimalContext();
    const [search, setSearch] = useState('');
    console.log(search);

    const findAnimal = ()=> {
        fetchAnimal(search);
    }

    return (
      <SearchBar
        placeholder="Buscar Animal"
        onChangeText={(value)=> setSearch(value)}
        onBlur={()=> findAnimal()}
        value={search}
      />
    );
}

export default AnimalSearch;
