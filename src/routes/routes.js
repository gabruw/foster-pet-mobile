//#region Imports

import Authentication from 'views/authentication';

//#endregion

export const ROUTE_NAMES = {
    AUTHENTICATION: 'Authentication'
};

export const STACK_ROUTES = [
    {
        Component: Authentication,
        name: ROUTE_NAMES.AUTHENTICATION
    }
];
