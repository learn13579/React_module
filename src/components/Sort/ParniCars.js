import {useEffect, useState} from "react";
import {getCars} from "../../service/servise";
import  './sort.css';

export default function ParniCars() {
    let [cars, setCars] = useState([])

    let parni = cars.filter(value => value.model.length  % 2 === 0);

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])

    return (
        <div className={'cars'}>
            <h2>Parni cars</h2>
            { parni.map(value =>
                <div className={'car'} key={value.id}>
                    <p>car id:{value.id}</p>
                    <h4>car model: {value.model}</h4>
                    <p>car price: {value.price}</p>
                    <p>car year:{value.year}</p>
                </div>)}
        </div>
    )
}
