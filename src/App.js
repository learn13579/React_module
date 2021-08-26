import './App.css';
import {useReducer} from "react";

// є об'єкт, значення якого 0
// Стоврити 2 кнопки.
//     Перша збільшує   значення на 10
// Друга зменшує на 2.
// Зміну стану та виведення реалізувати через reducer

const reduser = (state = {a: 0}, action) => {
// console.log(action);
if (action.obj==='1' && action.diya==='+'){
    return {...state, a: state.a+10};
} else if (action.obj==='1' && action.diya==='-'){
    return {...state, a: state.a-2};
}
return{...state};
}

export default function App() {

    let [state, dispatch] = useReducer(reduser, {a: 0});
    let {a} = state;

    return (
        <div>
            <h1>Object {a} </h1>
            <button onClick={() => dispatch({obj: '1', diya: '+' })}>increment on +10</button>
            <button onClick={() => dispatch({obj: '1', diya: '-' })}>decrement on -2</button>
        </div>
    );
}
