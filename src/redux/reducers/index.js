import {ADD_ONE, MINUS_ONE, BG_SET, GET_TEXT} from '../actions/';

const initialState = {
    number: 0,
    backgroundColor: 'red',
    text: ''
}

function counter(state = initialState, action){

    if(action.type === ADD_ONE){
        return {number: state.number + 1};
    }

    if(action.type === MINUS_ONE){
        return {number: state.number - 1};
    }

    return state;

};

function backgroundColor(state = initialState, action){

    if(action.type === BG_SET && state.backgroundColor === 'red'){
        return {backgroundColor: 'blue'}
    }else if(action.type === BG_SET && state.backgroundColor === 'blue'){
        return {backgroundColor: 'red'}
    }

    return state;

}

function text(state = initialState, action){

    if(action.type === GET_TEXT){
        return {text: action.payload}
    }

    return state;
}

export { counter, backgroundColor, text};