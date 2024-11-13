import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
    dataLoadError: null,
    data: null,
    newInfoClient: {
        id: 0,
        f: '',
        i: '',
        o: '',
        balance: '',
    },
};

// function randomInt(min = 100, max = 200) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getIdList() {
//     return clientsArr.reduce( (idList, elem) => {
//         idList.push(+elem.id)
//         return idList;
//     }, [])
// };

// function generateNewId(arrListNum) {
//     let newCode = randomInt();
//     if (arrListNum.includes(newCode)) {
//         generateNewId(arrListNum);
//     } else {
//         return newCode;
//     }
// }

export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        updateLoadState: (state, action) => {
            state.dataLoadState = action.payload.state;
            state.dataLoadError = action.payload.error;
        },

        updateData: (state, action) => {
            state.data = action.payload;
        },

        savedClient: (state, action) => {
            if (action.payload.id === 0) {
                let getIdList = () => { return state.data.clientsArr.reduce( (idList, elem) => { 
                        idList.push(+elem.id); 
                        return idList;
                    }, [])
                };

                // let randomInt = (min = 100, max = 200) => {
                //     return Math.floor(Math.random() * (max - min + 1)) + min;
                // }
                // let generateNewId = (arrListNum) => {
                //     let newCode = randomInt();
                //     if (arrListNum.includes(newCode)) {
                //         generateNewId(arrListNum);
                //     } else {
                //         return newCode;
                //     }
                // }
                //let idClient = generateNewId( getIdList() );

                let idClient = ((getIdList().sort( (a,b) => {return b-a;} )[0]) + 1);
                state.data.clientsArr.push({...action.payload, id: idClient});
            } else {
                let indexPos =  state.data.clientsArr.findIndex(pos => pos.id === action.payload.id);
                state.data.clientsArr[indexPos] = action.payload;
            }
        },

        deleteClient: (state, action) => {
            state.data.clientsArr = state.data.clientsArr.filter((elem) => elem.id !== action.payload)
        },
    },
});

export const { updateLoadState, updateData, savedClient, deleteClient } = clientsSlice.actions;

export default clientsSlice.reducer;