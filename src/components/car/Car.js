import './Car.css'

export default function Car({item}) {

    return (

        <div className={'car'}>
            <ul>
                <li>car id:{item.id}</li>
                <li>car model: {item.model}</li>
                <li>car price: {item.price}</li>
                <li>car year:{item.year}</li>
            </ul>
        </div>
    );
}