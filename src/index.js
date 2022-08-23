import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rendering= ()=> {
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App render={rendering}/>
    </BrowserRouter>
  </React.StrictMode>
);
}
rendering()
