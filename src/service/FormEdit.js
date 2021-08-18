import {useState} from "react";
import {EditCar} from "./service.edit";

export default function FormEdit({item}) {

    let [model, setModel] = useState('model');
    let [price, setPrice] = useState('price');
    let [year, setYear] = useState('year');
    let [car, setCar] = useState({model: '', price: '', year: ''})

    const onSubmitForm = (e) => {
        e.preventDefault();
        let id=item.id
        let tempCar = {price, model, year,id}
        EditCar(tempCar);
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

            <form onSubmit={onSubmitForm}>

                <input type="text" name={'model'} onInput={onInputChangeModel}/>
                <input type="text" name={'price'} onInput={onInputChangePrice}/>
                <input type="text" name={'year'} onInput={onInputChangeYear}/>

                <button>save</button>

            </form>

        </div>
    );
}
