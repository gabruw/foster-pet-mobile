import React from 'react';
import { View } from 'react-native';
import useAnimalContext from 'storages/animal/context';
import ANIMAL_FIELDS from 'utils/constants/fields/animal';
import AnimalCard from '../animals-card';

const AnimalList = () => {
    const { animal } = useAnimalContext();

    //{categoria: 'Cachorro', imagem: ImagemCachorro, nome: 'Gabriel Cachorrao', idade: 10, raca: 'Vira Lata'},
    //{categoria: 'Gato', imagem: ImagemGato, nome: 'Garfield', idade: 9, raca: 'Siames'}

    return (
        <View>
            {animal &&
                animal.map((value, index) => {
                    return (
                        <View key={index}>
                            <AnimalCard
                                title={value[ANIMAL_FIELDS.ANIMALTYPE]}
                                imagemAnimal={value[ANIMAL_FIELDS.IMG]}
                                nome={value[ANIMAL_FIELDS.NAME]}
                                idade={value[ANIMAL_FIELDS.AGE]}
                                raca={value[ANIMAL_FIELDS.BREED]}
                            />
                        </View>
                    );
                })}
        </View>
    );
};

export default AnimalList;
