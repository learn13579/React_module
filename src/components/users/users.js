import {useEffect, useState} from 'react';
import User from "../user/user";
import {getUsers} from "../service/user.axios";
// import Posts from "../post/posts";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        // getUsers().then(value => setUsers([...value]));
        getUsers().then(({data}) => setUsers([...data]));
    }, [] );

    return (
                <div>
                {
                    users.map(value => <User item={value}  key={value.id}/>)
                }
                </div>
    );
}

