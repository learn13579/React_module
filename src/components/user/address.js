// import {Geo} from "./geo";

export function Address({address: {street, suite, city, zipcode}}) {

    return (
        <div className={'address'}>
            <ul> Address:
            <li>Street: {street}</li>
            <li>Suite: {suite}</li>
            <li>City: {city}</li>
            <li>Zipcode: {zipcode}</li>
            </ul>
        </div>);
}
