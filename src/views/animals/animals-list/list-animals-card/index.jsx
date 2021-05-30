import React from 'react';
import AnimalCard from './../animals-card/index';
import { View, Text, Image } from 'react-native';

import ImagemGato from '../../images/gatoTeste.jpg'
import ImagemCachorro from '../../images/cachorroTeste.jpeg'


const AnimalList = () => {
    return(
         <div>
            {
            Array.of({categoria: 'Cachorro', imagem: ImagemCachorro, nome: 'Gabriel Cachorrao', idade: 10, raca: 'Vira Lata'},
                     {categoria: 'Gato', imagem: ImagemGato, nome: 'Garfield', idade: 9, raca: 'Siames'}
                     )
                    .map((animal, index) =>{
                        return(
                            <div key={index}>
                                <AnimalCard title={animal.categoria}
                                            imagemAnimal={animal.imagem}
                                            nome={animal.nome}
                                            idade={animal.idade}
                                            raca={animal.raca}
                                />
                            </div>
                        )
                    })
            }
        </div>
        );

}

export default AnimalList;
