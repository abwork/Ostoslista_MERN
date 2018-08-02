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
            }
        case ADD_ITEM:
            return {
                    
            }
        case DELETE_ITEM:
            return {
                    
            }
        default:
            return state;

    }
}