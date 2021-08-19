import {useState} from "react";
import {NewCar} from "../../service/servise";
import Cars from "../cars/Cars";
import './Form.css'

export function Form() {

    let [model, setModel] = useState('model');
    let [price, setPrice] = useState('price');
    let [year, setYear] = useState('year');
    let [car, setCar] = useState({model: '', price: '', year: ''})

    const onSubmitForm = (e) => {
        e.preventDefault();
        let tempCar = {price, model, year}
        NewCar(tempCar);
        setCar({...tempCar});
    }

    const onInputChangeModel = (e) => {
        let model = e.target.value
        setModel(model);
    }

    const onInputChangePrice = (e) => {
        let price = e.target.value
        setPrice(price);
    }

    const onInputChangeYear = (e) => {
        let year = e.target.value
        setYear(year);
    }

    return (
        <div className={'wrap'}>
            <h2><b> List of car</b></h2>

                <h3>add to the car list:</h3>

            <form onSubmit={onSubmitForm}>

                <input type="text" name={'model'} value={model} onInput={onInputChangeModel}/>
                <input type="text" name={'price'} value={price} onInput={onInputChangePrice}/>
                <input type="text" name={'year'} value={year} onInput={onInputChangeYear}/>

                <button>submit</button>
            </form>

            <div className={'carList'}><Cars/></div>
        </div>
    );
}
