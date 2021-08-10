import {Address} from "./address";
export function User({pId, pName, pUsername, pEmail, pPhone, pWebsite}) {
    // console.log(props);

    return (
        <div className={'user'}>
            <h2>Id: {pId}</h2>
            <h3>Name: {pName}</h3>
            <h4>Username: {pUsername} </h4>
            <p>Email: {pEmail}</p>
            <p>Phone: {pPhone}</p>
            <p>Website: {pWebsite}</p>
        </div>);
}


// let usersList = [
//     {
//         id: 1,
//         name: 'Leanne Graham',
//         username: 'Bret',
//         email: 'Sincere@april.biz',
//         address: {
//             street: 'Kulas Light',
//             suite: 'Apt. 556',
//             city: 'Gwenborough',
//             zipcode: '92998-3874',
//             geo: {
//                 lat: '-37.3159',
//                 lng: '81.1496'
//             }
//         },
//         phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//         company: {
//             name: 'Romaguera-Crona',
//             catchPhrase: 'Multi-layered client-server neural-net',
//             bs: 'harness real-time e-markets'
//         }
//     },