export function Company({pName, pCatchPhrase, pBs}) {

    return (
        <div className={'company'}>
            <ul> Company:
                <li>Name: {pName}</li>
                <li>CatchPhrase: {pCatchPhrase}</li>
                <li>Bs: {pBs}</li>
            </ul>
        </div>);
}
