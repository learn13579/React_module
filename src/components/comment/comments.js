import {useEffect, useState} from 'react';
import Comment from "./comment";
import {getComments} from "../service/comment.service";

export default function Comments() {

    let [comment, setComments] = useState([]);

    useEffect(() => {
       getComments().then(value => setComments([...value]));
    }, [] );

    return (
        <div>
            <hr/>
            <h2>Comments: </h2>
            {
                comment.map((value => <Comment item={value}  key={value.id}/>))
            }
        </div>
    );
}