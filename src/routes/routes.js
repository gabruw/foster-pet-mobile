//#region Imports

import Authentication from 'views/authentication';
import Animal from 'views/animals';

//#endregion

export const ROUTE_NAMES = {
    AUTHENTICATION: 'Authentication',
    ANIMAL: 'Animal'
};

export const STACK_ROUTES = [
    {
        Component: Authentication,
        name: ROUTE_NAMES.AUTHENTICATION
    },
    {
        Component: Animal,
        name: ROUTE_NAMES.ANIMAL
    }
];
