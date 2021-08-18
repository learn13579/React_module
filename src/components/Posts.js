import {useEffect, useState} from "react";
import {getPosts} from "../services/post.service";
import'./style.css';

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => {
            setPosts([...value]);
        })
    }, []);


    return (
        <div className={'posts'}>
            <h2>Posts:</h2>
            <div className={'post'}>
                {posts.map(value => <div key={value.id}>
                    <b>{value.id}. {value.title}</b>
                    <p>{value.body}</p>
                </div>)}

            </div>
        </div>
    );
}



