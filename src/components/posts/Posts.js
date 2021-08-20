// /posts
// Отримує posts з jsobplaceholder, виводить їх всі.
// Біля кожного поста зробити лінку (не конопку) яка буде вести на детальну інформацію поста.
// Детальну інформацію отримувати через history.state

import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.services";
import Post from "./Post";
import {Route, Switch} from "react-router-dom";
import PostDetails from "./PostDetails";

export default function Posts(props) {
    let {match: {url}, history} = props;
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, []);

    return (
        <div className={'posts'}>
            <div> {posts.map(value => <Post item={value} key={value.id}/>)}</div>

            <div>
                <Route path={`${url}/:id`} component={PostDetails}/>
            </div>
        </div>
    );
}