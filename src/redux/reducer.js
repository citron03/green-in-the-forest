import {combineReducers} from 'redux';
import { FETCH_DATA } from './action';
import { initState } from './initState';
import dataManufacturetoArr from './dataManufacturetoArr';

const fetchReducer = (state = initState, action) => {
    switch(action.type){
        // 데이터 불러오기 성공
        case FETCH_DATA : {
            const dataToArr = dataManufacturetoArr(action.payload);
            return dataToArr;
        }
        default:
            return state;
    }
}

const reducer = combineReducers({fetchReducer});

export default reducer;

