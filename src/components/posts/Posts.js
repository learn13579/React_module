import {useEffect, useState} from "react";
import Post from "../post/Post";
import {getPost, getPosts} from "../../service/post.cervice";
import './Posts.css';

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);

    // function choosePost(postItem) {
    //     getPost(postItem.id).then(value => setPost(value));
    // }
    const choosePost = (postItem) => getPost(postItem.id).then(value => setPost(value));

    useEffect(() => {
        getPosts().then(value => {

            setPosts([...value]);
        })
    }, []);

    return (
        <div className={'wrap'}>
            {
                posts.map(value =>
                    <Post
                        key={value.id}
                        item={value}
                        choosePost={choosePost}
                    />
                )
            }
            {
                post && <div className={'post-detail'}>
                    <h4>Id: {post.id}. Title: {post.title}</h4>
                    <p>Text: {post.body}</p>
                </div>
            }
        </div>
    );
}
