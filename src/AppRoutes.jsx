//#region Imports

import React from 'react';
import { StaticRouter, Route, Switch } from 'react-router-dom';
import ROUTES from './routes/routes';

//#endregion

const AppRoutes = () => (
    <StaticRouter>
        <Switch>
            {ROUTES.map(({ path, exact, component }, index) => (
                <Route key={index} path={path} exact={exact} component={component} />
            ))}
        </Switch>
    </StaticRouter>
);

export default AppRoutes;
