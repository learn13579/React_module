import {useEffect, useState} from "react";
import User from "./User";
import {getUsers} from "../../services/user.services";
import {Route, useLocation, Switch} from "react-router-dom";
import UserDetailsAPI from "./UserDetailsAPI";
import './user.css'
// /users -
// робить все те, що було на занятті останнім способом
// (через кнопку та додатковий запит на сервер)

export default function Users(props) {
    let {match: {url}} = props;
    let [users, setUsers] = useState([]);

    useEffect(async () => {
        let response = await getUsers();
        setUsers([...response]);
    }, []);

    return (
        <div className={'users'}>
            <div>
                {users.map(value => <User item={value} key={value.id}/>)}
            </div>


            <div>
                <Route path={`${url}/:id`} render={(props) => {
                    return <UserDetailsAPI {...props}/>
                }}/>
            </div>
        </div>
    );
}


