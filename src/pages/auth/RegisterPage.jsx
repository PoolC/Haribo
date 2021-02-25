import React from 'react';
import RegisterFormContainer from '../../containers/auth/RegisterFormContainer/RegisterFormContainer';
import { Route, Switch } from 'react-router-dom';
import { MENU } from '../../constants/menus';
import RegisterSuccess from '../../components/auth/RegisterSuccess';

const RegisterPage = () => {
  return (
    <>
      <>
        <Switch>
          <Route exact path="/register/success" component={RegisterSuccess} />
          <Route
            component={RegisterFormContainer}
            path={`/${MENU.SIGNUP}`}
            exact
          />
          {/* <Route
          exact
          path="/register"
          render={() => (
            <Authentication mode={2} handleRegister={this.handleRegister} />
          )}
        />
        <Route component={NotFound} /> */}
        </Switch>
      </>
    </>
  );
};

export default RegisterPage;
