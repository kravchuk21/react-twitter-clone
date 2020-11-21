import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { SignIn } from './pages/SignIn';
import { UserPage } from './pages/User';
import { AuthApi } from './services/api/authApi';
import { setUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth } from './store/ducks/user/selectors';

function App() {
  // TODO: Поправить через саги или как-нибудь по другому, это херня
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  // TODO: Чекать если юзер не авторизован, то очищать токен и редакс
  const checkAuth = async () => {
    try {
      const { data } = await AuthApi.getMe();
      dispatch(setUserData(data));
      // history.replace('/home');
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    checkAuth();
  }, []);

  React.useEffect(() => {
    if (isAuth) {
      history.push('/home');
    }
  }, [isAuth]);

  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} exact />
        <Layout>
          <Route path="/home" component={Home} />
          <Route path="/user" component={UserPage} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
