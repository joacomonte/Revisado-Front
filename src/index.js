import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>

            <App />

    </BrowserRouter>

);

{/* <Provider store={store}>
</Provider>
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux' */}


// const store = configureStore(
//     {
//         reducer:{}
//     }
// )