// import {useEffect, useState} from "react";
// import {getUsers} from "../../service/user.service";
//
// import User from "../user/User";
// import './users.css';
// import {getPost, getPosts} from "../../service/post.cervice";
//
// export default function Users() {
//
//     let [users, setUsers] = useState([]);
//     let [posts, setPosts] = useState(null);
//     console.log(posts);
//
//     const chooseUser = (id) => getPost(id).then(value => setPosts(value));
//
//     useEffect(() => {
//         getUsers().then(value => setUsers([...value]))
//     }, [])
//     return (
//         <div className={'wrap'}>
//             <div className={'user_list'}>{
//                 users.map(value =>
//                     <User
//                         key={value.id}
//                         item={value}
//                         chooseUser={chooseUser}
//                     />
//                 )
//             }
//             </div>
//                 <div className={'user_posts'}>
//                     {posts && posts.map(value => <h5 key={value.id}>{value.id}. {value.title}</h5>)}
//                 </div>
//         </div>
//     );
// }