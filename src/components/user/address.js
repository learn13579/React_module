export function Address({pStreet, pSuite, pCity, pZipcode}) {

    return (
        <div className={'address'}>
            <ul> Address:
            <li>Street: {pStreet}</li>
            <li>Suite: {pSuite}</li>
            <li>City: {pCity}</li>
            <li>Zipcode: {pZipcode}</li>
            </ul>
        </div>);
}
