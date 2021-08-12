import {Address} from "./address";
import {useEffect, useState} from "react";
import {getPostOfUser} from "../service/user.axios";
import Post from "../post/post";

export default function User({item, item: {address}}) {

    const [post, setPosts]=useState([]);
    useEffect(()=> {
            getPostOfUser(item.id).then(value => setPosts([...value.data]));
        }, [item.id] );

    return (
        <div>
            <h3>Id:{item.id}. {item.name}{item.username}</h3>
            <p>Email: {item.email}</p>

            <Address address={address}/>

            <h4>Posts of user:</h4>
            {post && post.map(value => <Post key={value.id} item={value}/>)}
            <hr/>
        </div>);
}

