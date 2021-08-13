import {useEffect, useState} from "react";
import Post from "../post/Post";
import './users.css';
import {getPost, getPosts} from "../../service/post.cervice";
// import {getComment, getComments} from "../../service/comment.service.cervice";

export default function Posts() {

    let [posts, setPosts] = useState([]);
    // let [comments, setComments] = useState(null);

    const choosePost = (id) => getPost(id).then(value => setPosts(value));

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])
    return (
        <div className={'wrap'}>
            <div className={'post_title'}>{
                posts.map(value =>
                    <Post
                        key={value.id}
                        item={value}
                        choosePost={choosePost}
                    />
                )
            }
            </div>
            <div className={'post_comments'}>
                {posts && posts.map(value => <p key={value.id}> {value.body}</p>)}
            </div>
        </div>
    );
}