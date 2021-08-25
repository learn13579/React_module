import {useEffect, useState} from "react";
import {getCars} from "../../service/servise";
import  './sort.css';

export default function UpdateCar() {

    let [cars, setCars] = useState([])

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])

    return (
        <div className={'cars'}>
            <h2>List cars</h2>
            { cars.map(value =>
                <div className={'car'} key={value.id}>
                    <p>car id:{value.id}</p>
                    <h4>car model: {value.model}</h4>
                    <p>car price: {value.price}</p>
                    <p>car year:{value.year}</p>
                </div>)}
        </div>
    )
}