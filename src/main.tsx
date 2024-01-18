import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MemoryRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './state/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  </React.StrictMode>,
)
