import {useEffect, useState} from "react";
import Post from "../post/Post";
import {getPost, getPosts} from "../../service/post.cervice";

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);

    const choosePost = (id) => getPost(id).then(value => setPost(value));

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, []);

    return (
        <div className={'wrap'}>
            <div className={'post_title'}>{
                posts && posts.map(value =>
                    <Post
                        key={value.id}
                        item={value}
                        choosePost={choosePost}
                    />
                )
            }
            </div>
            <div className={'post-detail'}>
                {post && posts.map(value => <p key={value.id}> {value.body}</p>)}
            </div>
        </div>
    );
}