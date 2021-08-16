import {useEffect, useState} from "react";
import Comment from "../comment/Comment";
import {getComment, getComments} from "../../service/comment.service.js";
import './comments.css';

export default function Comments() {

    let [comments, setComments] = useState([]);
    let [comment, setComment] = useState(null);

    const chooseComment = (commentItem) => getComment(commentItem.id).then(value => setComment(value));

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, []);

    return (
        <div className={'wrap2'}>
            {
                comments.map(value =>
                    <Comment
                        key={value.id}
                        item={value}
                        chooseComment={chooseComment}
                    />
                )
            }
            {
                comment && <div className={'comment-detail'}>
                    <h4>Id comment: {comment.id}. Title: {comment.name}</h4>
                    <p>email: {comment.email} </p>
                    <p>Text: {comment.body}</p>
                </div>
            }
        </div>
    );
}
