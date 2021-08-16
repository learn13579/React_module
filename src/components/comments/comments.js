import {useEffect, useState} from "react";
import Comment from "../comment/comment";
import {getComment, getComments} from "../../service/comment.service.js";

export default function Comments() {

    let [comment, setComment] = useState([]);
    let [comments, setComments] = useState([]);

    const chooseComment = (id) => getComment(id).then(value => setComments(value));

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
            <div className={'post_comments'}>
                {comments && comments.map(value => <p key={value.id}> {value.body}</p>)}
            </div>
        </div>
    );
}