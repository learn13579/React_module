import {useEffect, useState} from 'react';
import Post from "../post/post";
import {getPosts} from "../service/post.service";

export default function Posts() {

    let [post, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, [] );

    return (
        <div>
            <hr/>
            <h2>Posts: </h2>

            {
                post.map((value => <Post item={value}  key={value.id}/>))
            }
        </div>
    );
}
