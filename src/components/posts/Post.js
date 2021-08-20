import {
    Link, Route, Router,
    withRouter
} from "react-router-dom";
import './post.css'

function Post({item}) {


    return(
        <div>

            <div className={'post'}>
                {item.id}.  {item.title} - <Link to={{pathname:`/posts/${item.id}`, state:item}}>post details</Link>

            </div>


        </div>
    )

}
//     console.log(history);
//     const navigateTo = () => {
//         history.push(`/users/${item.id}`);
//     };
//
//     return (
//         <div>
//             {/*{item.name} - <Link to={{pathname:`/users/${item.id}`,state : item}}> user details</Link>*/}
//             {/*{item.name} - <Link to={`/users/${item.id}`}> user details api sub fetch</Link>*/}
//             {item.name} - <button onClick={navigateTo}>go to details</button>
//
//
//         </div>
//     );
// }

export default withRouter(Post);