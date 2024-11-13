// Второй файл
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import TableClients from './components/TableClients';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="body__container">
                <TableClients />
            </div>
        </Provider>
    );
}

export default App;
