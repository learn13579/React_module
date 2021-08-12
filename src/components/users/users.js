import {useEffect, useState} from 'react';
import User from "../user/user";
import {getUsers} from "../service/user.service";

export default function Users() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]));

        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(value => value.json())
        //     .then(value => {
        //         /*users = value;*/
        //         setUsers(value);
        //     });
    }, [] );

    return (
        <div>
            {
                users.map((value => <User item={value}  key={value.id}/>))
            }
        </div>
);
}

