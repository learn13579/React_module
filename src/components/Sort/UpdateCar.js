import {useEffect, useState} from "react";
import {getCars, NewCar} from "../../service/servise";
import Car from "../car/Car";
import  './sort.css';
import FormEdit from "../../service/FormEdit";
import {DeleteCar} from "../../service/service.delete";

export default function UpdateCar(){

let [cars, setCars] = useState([])

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])

    // const onSubmitForm = (e) => {
    //     e.preventDefault();
    //     let tempCar = {price, model, year}
    // }
    // const onClickEditCar = () =>setEdit(<FormEdit item = {item}/>)
    //
    // const onClickDeleteCar = () => {
    //     DeleteCar(item);
    // }

    function SelectOnChange(e){

    }


    return (
        <div>
            <select className={'select'} onChange={SelectOnChange}>
                {cars.map(value => <option item={value} key={value.id}>id:{value.id},  model: {value.model}, price: {value.price}, year:{value.year} </option> )}
            </select>


        </div>
    );

}

// <div><FormEdit/> </div>