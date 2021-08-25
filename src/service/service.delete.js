const DeleteCar = ({id}) => {

    fetch(`http://192.168.1.253/api/v1/cars/${id}`, {
        method: 'DELETE'
    })
}

export {DeleteCar}