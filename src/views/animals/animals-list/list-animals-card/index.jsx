import React from 'react';
import AnimalCard from './../animals-card/index';

const AnimalList = () => {
    return(
         <div>
            {
            Array.of("Cachorro","Pato","Papagaio").map(animal =>{
                return(
                    <div>
                        <AnimalCard title={animal}/>
                    </div>
                )
            })
            }
        </div>
        );

}

export default AnimalList;
