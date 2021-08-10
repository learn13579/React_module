export function Simpson({pTitle, ag, pict, inf}) {
    // console.log(props);

    return (
        <div className={'simpson'}>
            <h2>{pTitle}</h2>
            <h3>{ag}</h3>
            <img
                src={pict}
                alt="foto"/>
            <p>{inf}</p>
        </div>);
}