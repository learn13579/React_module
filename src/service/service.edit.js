const  EditCar= (item) => {

    fetch(`http://192.168.1.253/api/v1/cars/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

export {EditCar}