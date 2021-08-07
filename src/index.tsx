import ReactDOM from 'react-dom';
import GlobalStyles from 'Styles/globalStyles';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'Store/store';

import App from 'App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
