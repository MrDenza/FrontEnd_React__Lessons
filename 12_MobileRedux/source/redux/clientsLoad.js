import { updateLoadState, updateData } from './clientsSlice.js';

export async function clientsLoad(dispatch) {
    try {
        dispatch(updateLoadState({ state: 1, error: null }));
        console.log('Load data!');
        const response = await fetch(
            'https://fe.it-academy.by/Examples/mobile_company.json'
        );
        if (response.ok) {
            const data = await response.json();
            dispatch(updateLoadState({ state: 2, error: null }));
            dispatch(updateData(data));
            console.log('Data is load!');
        } else {
            dispatch(
                updateLoadState({
                    state: 3,
                    error: 'HTTP error ' + response.status,
                })
            );
        }
    } catch (err) {
        dispatch(updateLoadState({ state: 3, error: err.message }));
    }
}
