const  EditCar= (item) => {

    fetch(`http://195.72.146.25/api/v1/cars/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

export {EditCar}