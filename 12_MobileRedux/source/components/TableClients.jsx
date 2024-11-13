import { Fragment, memo, useState, useEffect, useRef } from 'react';
import { eventFlow } from '../js-modules/eventEmitter';
import { useDispatch, useSelector } from 'react-redux';
import { clientsLoad } from '../redux/clientsLoad';
import { savedClient, deleteClient } from '../redux/clientsSlice';

import ClientPos from './ClientPos';
import ClientForm from './ClientForm';
import ControlBtn from './ControlBtn';

import './TableClients.css';

function TableClients(props) {

    const dispatch = useDispatch();
    const clientsDB = useSelector((state) => state.clients);
    const [editClientId, setEditClientId] = useState(-1);
    const [filterMode, setFilterMode] = useState(0);

    useEffect(() => {
        // componentDidMount
        dispatch(clientsLoad);

        eventFlow.on("editPos", editClient);
        eventFlow.on("savePos", saveClient);
        eventFlow.on("delPos", delClient);
        eventFlow.on("cancelEdit", cancelEdit);
        eventFlow.on("filterAll", filterAll);
        eventFlow.on("filterActive", filterActive);
        eventFlow.on("filterBlocked", filterBlocked);
        return () => {
            // componentWillUnmount
            eventFlow.removeListener("savePos", saveClient);
            eventFlow.removeListener("delPos", delClient);
            eventFlow.removeListener("editPos", editClient);
            eventFlow.removeListener("cancelEdit", cancelEdit);
            eventFlow.removeListener("filterAll", filterAll);
            eventFlow.removeListener("filterActive", filterActive);
            eventFlow.removeListener("filterBlocked", filterBlocked);
        }
    }, []);

    const editClient = (id) => setEditClientId(id);
    const cancelEdit = () => setEditClientId(-1);
    const filterAll = () => setFilterMode(0);
    const filterActive = () => setFilterMode(1);
    const filterBlocked = () => setFilterMode(2);
    const addNewClient = () => setEditClientId(0);

    const saveClient = (obj) => {
        dispatch( savedClient(obj) );
        setEditClientId(-1);
    }

    const delClient = (id) => {
        dispatch( deleteClient(id) );
    }

    let filteredListClients = (clientsDB.dataLoadState === 2) ? clientsDB.data.clientsArr.filter( (client) => {
        switch (filterMode) {
            case 1: return client.balance >= 0;
            case 2: return client.balance < 0;
        default: return true;
        }
    }) : '';

    let clientsPos = (clientsDB.dataLoadState === 2) ? filteredListClients.map(
        (pos) => {
            if (pos.id === editClientId) {
                return <ClientForm clientInfo={pos} key={pos.id}/>
            } else {
                return <ClientPos clientInfo={pos} key={pos.id}/>
            }     
        }
    ) : '';
    
    console.log('Render TableClients');
    return (
        <Fragment>
            <ControlBtn/>
            <table className="table-clients">
                <thead>
                    <tr>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                        <th>Баланс</th>
                        <th>Статус</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    { (clientsDB.dataLoadState === 0) && <tr><td colSpan="7">Отсутствует доступ к данным!</td></tr> }
                    { (clientsDB.dataLoadState === 1) && <tr><td colSpan="7">Загрузка данных...</td></tr> }
                    { (clientsDB.dataLoadState === 2) && clientsPos }
                    { (clientsDB.dataLoadState === 3) && <tr><td colSpan="7">{"Ошибка загрузки данных: " + clientsDB.dataLoadError}</td></tr> }
                </tbody>
                <tfoot>
                    {editClientId === 0 && (
                        <ClientForm
                            clientInfo={clientsDB.newInfoClient}
                            key={clientsDB.newInfoClient.id}
                        />
                    )}
                </tfoot>
            </table>
            <label htmlFor="btn-add">
                <input
                    type="button"
                    id="btn-add"
                    value="Добавить клиента"
                    disabled={clientsDB.dataLoadState !== 2}
                    onClick={() => {addNewClient()}}
                ></input>
            </label>
        </Fragment>
    );
}

export default memo(TableClients);