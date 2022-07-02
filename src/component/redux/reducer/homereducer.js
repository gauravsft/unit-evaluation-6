import { GET_DATA, GET_DATA_USER} from '../action/homeaction';

export const MovieReducer = (state = {data:[]}, { type, payload }) => {
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                data:payload
            };
       
        default:
            return state;
    }
}

export const UserReducer = (state = {user:[]}, { type, payload }) => {
    switch (type) {
        case GET_DATA_USER:
            return {
                ...state,
                user:payload
            };
       
        default:
            return state;
    }
}