import {useEffect, useState} from "react";
import {getCars} from "../../service/servise";
import Car from "../car/Car";
import './Cars.css'

export default function Cars() {

    let [cars, setCars] = useState([])

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])

    const onClickDeleteCar = () => {
        // chooseComment(item);
    }

    return (
        <div>
            <div className={'box'}>
                {
                    cars.map(value => <Car item={value} key={value.id}/>)
                }
            </div>

            <button onClick={onClickDeleteCar}>delete</button>

        </div>
    );
}