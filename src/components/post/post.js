import {useEffect, useState} from "react";
import {getCommentOfUser} from "../service/post.axios";

export default function Post({item}) {
    let [commentsOfPost, setCommentsOfPost] = useState([]);
    useEffect(() => {
        getCommentOfUser(item.id).then(value => setCommentsOfPost(value.data))
    }, [])
    return (
        <div>
            <h6>{item.id}. {item.title}</h6>
            <p>{item.body}</p>
            {commentsOfPost.map(value => <div><i> {value.id}. {value.name}</i></div>)}
        </div>);
}