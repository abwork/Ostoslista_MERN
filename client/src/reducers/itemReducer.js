import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const intialState = {
    items: [
        { id: uuid(), name: 'Maito' },
        { id: uuid(), name: 'Kukka' },
        { id: uuid(), name: 'Banani' },
        { id: uuid(), name: 'Kahvi' }
    ]
}

export default function(state = intialState, action){
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}