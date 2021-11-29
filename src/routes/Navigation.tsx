import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import { LazyPage1,LazyPage2,LazyPage3 } from '../01-lazyload/pages';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
         <Router>
          <div className="main-layout">
            <nav>
                <img src={ logo } alt="React Logo" />
              <ul>
                {
                  routes.map(x=>(
                    <li key={x.name.toString()}>
                      <NavLink to={x.path} activeClassName='nav-active'> {x.name}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              {
                routes.map(x=>(
                  <Route path={x.path} key={x.path} 
                      render={()=>{
                        return <x.Component/>
                      }}
                  /> 
                ))
              }
              <Redirect  to={routes[0].path}/>  
            </Switch>
          </div>
        </Router>
      </Suspense> 
  );
}