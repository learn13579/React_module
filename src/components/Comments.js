import {useEffect, useState} from "react";
import {getComments} from "../services/comments.service";
import'./style.css';

export default function Comments() {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => {
            setComments([...value]);
        })
    }, []);

    return (
        <div className={'comments'}>
            <h2>Comments:</h2>
            <div className={'comment'}>
                {comments.map(value => <div key={value.id}>
                    <b>{value.id}. {value.name}</b>
                    <h5>email of user: {value.email}</h5>
                    <p>{value.body}</p>
                </div>)}

            </div>
        </div>
    );
}