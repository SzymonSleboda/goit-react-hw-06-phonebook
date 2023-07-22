import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App';
import contactsSliceReducer from './components/redux/contactsSlice';
import filterReducer from './components/redux/filterSlice';

import './index.css';

const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filter: filterReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);