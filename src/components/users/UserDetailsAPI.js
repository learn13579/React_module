import {useEffect, useState} from "react";
import {getUser} from "../../services/user.services";
import './user.css'

export default function UserDetailsAPI(props) {
    console.log(props);
    let {match: {params: {id}}} = props;
    let [user, setUser] = useState({});

    useEffect(() => {
        getUser(id).then(value => setUser({...value}));
    }, [id]);

    return (
        <div>
            <div className={'user-detail'}>
                <h4>Id user: {user.id}.</h4>
                <h5>Name: {user.name}</h5>
                <h5>User name: {user.username}</h5>
                <p>email: {user.email}</p>
                <p>phone: {user.phone}</p>
            </div>
        </div>
    );
}
