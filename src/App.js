import './App.css';
import {useReducer} from "react";

// створити об'єкт {a:0,b:0,c:0}
// Створити 6 кнопок.
//     по дві на кожен з параметрів об'єкту.
// одна кнопка збільшує значення , інша зменшує
// логіку реалізувати через reducer

const reduser = (state = {a: 0, b: 0, c: 0}, action) => {
// console.log(action);
    if (action.obj === '1' && action.diya === '+') {
        return {...state, a: state.a + 5};
    } else if (action.obj === '1' && action.diya === '-') {
        return {...state, a: state.a - 5};
    }

    if (action.obj === '2' && action.diya === '+') {
        return {...state, b: state.b + 10};
    } else if (action.obj === '2' && action.diya === '-') {
        return {...state, b: state.b - 10};
    }

    if (action.obj === '3' && action.diya === '+') {
        return {...state, c: state.c ++};
    } else if (action.obj === '3' && action.diya === '-') {
        return {...state, c: state.c - 1};
    }

    return {...state};

}

export default function App() {

    let [state, dispatch] = useReducer(reduser, {a: 0, b: 0, c: 0});
    let {a, b, c} = state;

    return (
        <div className={'buttons'}>
            <div className={'button'}>
                <h1>Object a = {a} </h1>
                <button onClick={() => dispatch({obj: '1', diya: '+'})}>increment on +5</button>
                <button onClick={() => dispatch({obj: '1', diya: '-'})}>decrement on -5</button>
            </div>
            <div className={'button'}>
                <h1>Object b = {b} </h1>
                <button onClick={() => dispatch({obj: '2', diya: '+'})}>increment on +10</button>
                <button onClick={() => dispatch({obj: '2', diya: '-'})}>decrement on -10</button>
            </div>
            <div className={'button'}>
                <h1>Object c = {c} </h1>
                <button onClick={() => dispatch({obj: '3', diya: '+'})}>increment on +1</button>
                <button onClick={() => dispatch({obj: '3', diya: '-'})}>decrement on -1</button>
            </div>
        </div>
    );
}
