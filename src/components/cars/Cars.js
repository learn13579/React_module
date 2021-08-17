import {useEffect, useState} from "react";
import {getCars} from "../../service/servise";
import Car from "../car/Car";
import './Cars.css'

export default function Cars() {

    let [cars, setCars] = useState([])

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])

    return (
        <div className={'box'}>
            {
                cars.map(value => <Car item={value} key={value.id}/>)
            }
        </div>
    );
}