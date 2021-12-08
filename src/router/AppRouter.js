import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {routes} from './router';


export const AppRouter = () => {

    return (

        <Switch>
            <div>
                {routes.map(route => <Route key={route.id} path={route.path} exact={route.exact}
                                            component={route.component}/>)}

            </div>
        </Switch>
    );
};
