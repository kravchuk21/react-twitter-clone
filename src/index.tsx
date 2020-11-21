import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import './index.css';

import App from './App';
import theme from './theme';
import { store } from './store/store';

// TODO:
// 2. Сделать редюсер для "Кого читать"
// 3. Сделать получение информации о пользователе (простой объект. имитация авторизации)
// 4. Попытаться сделать поиск и просмотро актуальных тем из БД
// 5. Сделать linkify для твита и <br /> при переходе на новую строчку
// 6. Поправить открытие меню для твитов (происходит переходи в твит, которого не должно быть)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);
