import {useEffect, useState} from "react";
import Comment from "../comment/comment";
import {getComment, getComments} from "../../service/comment.service.js";

export default function Comments() {

    let [comment, setComment] = useState([]);
    let [comments, setComments] = useState([]);

    const chooseComment = (id) => getComment(id).then(value => setComment(value));

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, []);

    return (
        <div className={'wrap'}>
            <div className={'comment_title'}>{
                comments.map(value =>
                    <Comment
                        key={value.id}
                        item={value}
                        chooseComment={chooseComment}
                    />
                )
            }
            </div>
            <div className={'comments_detail'}>
                {comment && comment.map(value => <p key={value.id}> {value.body}</p>)}
            </div>
        </div>
    );
}