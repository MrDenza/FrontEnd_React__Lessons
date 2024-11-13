// Второй файл
import React from "react";
import { Provider } from 'react-redux';
import { store } from './redux/store'
import './App.css';

function App() {

    return (
        <Provider store={store}>

        </Provider>
    );
    
}

export default App;
