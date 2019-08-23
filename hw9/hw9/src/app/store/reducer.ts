import actions from './actions';

const { INCREMENT, DECREMENT, RESET} = actions;
const initialState = {counter: 0};

export default function reducer(state = initialState, action: any) {
   switch (action.type) {

    case INCREMENT:
        if (state.counter !== 21) {
        return state = {counter: state.counter + action.payload };
    } else {
        return state = {counter: state.counter };
    }

    case DECREMENT:
        if (state.counter !== -9) {
       return state = {counter: state.counter - action.payload };
        } else {
        return state = {counter: state.counter };
        }

    case RESET:
            return state = {counter: 0 };
            
    default:
        return state;
   }
}
