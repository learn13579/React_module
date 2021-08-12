import {Address} from "./address";

export default function User({item, item: {address}}) {
    return (
        <div>
            <h2>Id:{item.id} {item.name}</h2>
            <p>Email: {item.email} {item.username}</p>
            <Address address={address}/>
        </div>);
}