//#region Imports

import React from 'react';
import { AnimalContextProvider } from 'storages/animal/context';
import { FormContextProvider } from 'storages/form/context';
import animalSchema from 'utils/validations/yup/schemas/animal';
import AnimalSearch from 'views/animals/animals-list/animalSearch';
import AnimalList from 'views/animals/animals-list/list-animals-card';

//#endregion

const Animal = () => {
    return (
        <AnimalContextProvider>
            <FormContextProvider schema={animalSchema}>
                <AnimalSearch />
                <AnimalList />
            </FormContextProvider>
        </AnimalContextProvider>
    );
};

export default Animal;
