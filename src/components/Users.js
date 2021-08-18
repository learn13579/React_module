import {useEffect, useState} from "react";
import {getUsers} from "../services/user.service";
import'./style.css';


export default function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    return (
        <div className={'users'}>
            <h2>Users:</h2>
            <div className={'user'}>
                {users.map(value => <div key={value.id}>
                    <b>{value.id}. {value.name}</b>
                    <p>{value.email}</p>
                    <p>{value.phone}</p>
                </div>)}

            </div>
        </div>
    );
}

