import './Car.css'

export default function Car({item}) {

    return (
        <div className={'car'}>
                <p>car id:{item.id}</p>
                <h4>car model: {item.model}</h4>
                <p>car price: {item.price}</p>
                <p>car year:{item.year}</p>
        </div>
    );
}