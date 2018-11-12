import { SIGNED_IN } from '../constants';

// Default state of SIGNED_IN action
let user = {
    email: null
}

// Reducer
export default (state = user, action) => {
    switch (action.type){
        case SIGNED_IN:
            const { email } = action;
            user = {
                email
            }
            return user;

        default:
            return state;
    }
}