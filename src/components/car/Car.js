import './Car.css'
import {DeleteCar} from "../../service/service.delete";
import {EditCar} from "../../service/service.edit";
// import './Form.js'

export default function Car({item}) {

    const onClickEditCar = () => {
        EditCar(item);
        // onSubmitForm();
    }

    const onClickDeleteCar = () => {
        DeleteCar(item);
    }

    return (
        <div className={'car'}>
            <p>car id:{item.id}</p>
            <h4>car model: {item.model}</h4>
            <p>car price: {item.price}</p>
            <p>car year:{item.year}</p>

           <p>
               <button onClick={onClickEditCar}>edit</button>
               <button onClick={onClickDeleteCar}>delete</button>
           </p>

        </div>
    );
}