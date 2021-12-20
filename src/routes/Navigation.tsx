import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { RegisterPage } from '../03-forms/pages/RegisterPage';

import logo from '../logo.svg';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';
import { FormikAbstraction } from '../03-forms/pages/FormikAbstraction';
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';
import { DynamicForm } from '../03-forms/pages/DynamicForm';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik" activeClassName="nav-active" exact>Formik  Basic </NavLink>
            </li>
            <li>
              <NavLink to="/yup" activeClassName="nav-active" exact>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" activeClassName="nav-active" exact>Formik Components Abstraction</NavLink>
            </li>
            <li>
              <NavLink to="/RegisterFormikPage" activeClassName="nav-active" exact>Formik Register  Abstraction</NavLink>
            </li>
            <li>
              <NavLink to="/DynamicForm" activeClassName="nav-active" exact>DynamicForm</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/formik">
            <FormikBasicPage />
          </Route>
          <Route path="/yup">
            <FormikYupPage/>
          </Route>
          <Route path="/formik-components">
            <FormikComponents />
          </Route>
          <Route path="/formik-abstraction">
            <FormikAbstraction />
          </Route>DynamicForm
          <Route path="/RegisterFormikPage">
            <RegisterFormikPage />
          </Route>
          <Route path="/DynamicForm">
            <DynamicForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}