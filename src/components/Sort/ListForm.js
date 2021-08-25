import {useState} from "react";
import {NewCar} from "../../service/servise";
import  './sort.css';
import ListCar from "./ListCar";

export function ListForm() {

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
            <div className={'carList'}><ListCar/></div>
        </div>
    );
}