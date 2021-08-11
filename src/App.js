import './App.css';
import {Simpson} from "./components/simpson/Simpson";
import {User} from "./components/user/user";
import {Address} from "./components/user/address";
import {Geo} from "./components/user/geo";
import {Company} from "./components/user/company";

// 1
// - Коротко : отримати всіх юзерів з плейсхолдеру, та відтворити на сторіці
//
//
// створити сервіс (user.service.js) роботи  з users сутностями  з jsonplaceholer (getUsers(),getUser(id)).
//     Використати fetch / axios на вибір
// Створити компонент Users
// На  рівні Users, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент User який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
//     App-Users->User

// 2
// - Коротко : отримати всі пости з плейсхолдеру, та відтворити на сторіці
//
//
// створити сервіс (post.service.js) роботи  з post сутностями  з jsonplaceholer (getPosts(),getPost(id)).
//     Використати fetch / axios на вибір
// Створити компонент Posts
// На  рівні Posts, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент Post який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
//     App-Posts->Post
//
//
// 3
// - Коротко : отримати всі пости з плейсхолдеру, та відтворити на сторіці
//
//
// створити сервіс (comment.service.js) роботи  з comment сутностями  з jsonplaceholer (getComments(),getComment(id)).
//     Використати fetch / axios на вибір
// Створити компонент Comments
// На  рівні Comment, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент Comment який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
//     App-Comments->Comment

function App() {

    let us = 'users';

    return (<div>

            </div>
    );
}

export default App;


// Встановити та налаштувати середовище.

//     Взяти масив -

// let simpsons = [
//   {
//     name: 'Bart',
//     surname: 'Simpson',
//     age: 10,
//     info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//     photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//   },
//   {
//     name: 'Homer',
//     surname: 'Simpson',
//     age: 40,
//     info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//     photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//   },
//   {
//     name: 'Marge',
//     surname: 'Simpson',
//     age: 38,
//     info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//   },
//   {
//     name: 'Lisa',
//     surname: 'Simpson',
//     age: 9,
//     info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//   },
//   {
//     name: 'Maggie',
//     surname: 'Simpson',
//     age: 1,
//     info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//   },
// ];

// Створити компонент для того, щоб  відобразити кожного персонажа

// function App() {
//
//     let sim = 'simpsons';
//
//     return (
//         <div className={sim}>
//             <h1>Simpsons</h1>
//             <Simpson
//                 pTitle={'Bart Simpson'}
//                 ag={'10 age'}
//                 pict={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
//                 inf={'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.'}
//             />
//
//             <Simpson
//                 pTitle={'Homer Simpson'}
//                 ag={'40 age'}
//                 pict={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
//                 inf={'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.'}
//             />
//
//             <Simpson
//                 pTitle={'Marge Simpson'}
//                 ag={'38 age'}
//                 pict={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
//                 inf={'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.'}
//             />
//
//             <Simpson
//                 pTitle={'Lisa Simpson'}
//                 ag={'9 age'}
//                 pict={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
//                 inf={'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.}\n'}
//             />
//
//             <Simpson
//                 pTitle={'Maggie Simpson'}
//                 ag={'1 age'}
//                 pict={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
//                 inf={'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.'}
//             />
//
//         </div>
//     );
// }


// function App() {
//
//     let us = 'users';
//
//     return (<div>
//             <h1>Users</h1>
//
//             <div className={us}>
//                 <User
//                     pId={'1'}
//                     pName={'Leanne Graham'}
//                     pUsername={'Bret'}
//                     pEmail={'Sincere@april.biz'}
//                     pPhone={'1-770-736-8031 x56442'}
//                     pWebsite={'hildegard.org'}
//                 />
//                 <Address
//                     pStreet={'Kulas Light'}
//                     pSuite={'Apt. 556'}
//                     pCity={'Gwenborough'}
//                     pZipcode={'92998-3874'}
//                 />
//                 <Geo
//                     pLat={'-37.3159'}
//                     pLng={'81.1496'}
//                 />
//                 <Company
//                     pName={'Romaguera-Crona'}
//                     pCatchPhrase={'Multi-layered client-server neural-net'}
//                     pBs={'harness real-time e-markets'}
//                 />
//                 <hr/>
//             </div>
//
//             <div className={us}>
//                 <User
//                     pId={'2'}
//                     pName={'Ervin Howell'}
//                     pUsername={'Antonette'}
//                     pEmail={'Shanna@melissa.tv'}
//                     pPhone={'010-692-6593 x09125'}
//                     pWebsite={'anastasia.net'}
//                 />
//                 <Address
//                     pStreet={'Victor Plains'}
//                     pSuite={'Suite 879'}
//                     pCity={'Wisokyburgh'}
//                     pZipcode={'90566-7771'}
//                 />
//                 <Geo
//                     pLat={'-43.9509'}
//                     pLng={'-34.4618'}
//                 />
//                 <Company
//                     pName={'Deckow-Crist'}
//                     pCatchPhrase={'Proactive didactic contingency'}
//                     pBs={'synergize scalable supply-chains'}
//                 />
//                 <hr/>
//             </div>
//
//             <div className={us}>
//                 <User
//                     pId={'3'}
//                     pName={'Clementine Bauch'}
//                     pUsername={'Samantha'}
//                     pEmail={'Nathan@yesenia.net'}
//                     pPhone={'1-463-123-4447'}
//                     pWebsite={'ramiro.info'}
//                 />
//                 <Address
//                     pStreet={'Douglas Extension'}
//                     pSuite={'Suite 847'}
//                     pCity={'McKenziehaven'}
//                     pZipcode={'59590-4157'}
//                 />
//                 <Geo
//                     pLat={'-68.6102'}
//                     pLng={'-47.0653'}
//                 />
//                 <Company
//                     pName={'Romaguera-Jacobson'}
//                     pCatchPhrase={'Face to face bifurcated interface'}
//                     pBs={'e-enable strategic applications'}
//                 />
//                 <hr/>
//             </div>
//
//             <div className={us}>
//                 <User
//                     pId={'4'}
//                     pName={'Patricia Lebsack'}
//                     pUsername={'Karianne'}
//                     pEmail={'Julianne.OConner@kory.org'}
//                     pPhone={'493-170-9623 x156'}
//                     pWebsite={'kale.biz'}
//                 />
//                 <Address
//                     pStreet={'Hoeger Mall'}
//                     pSuite={'Apt. 692'}
//                     pCity={'South Elvis'}
//                     pZipcode={'53919-4257'}
//                 />
//                 <Geo
//                     pLat={'29.4572'}
//                     pLng={'-164.2990'}
//                 />
//                 <Company
//                     pName={'Robel-Corkery'}
//                     pCatchPhrase={'Multi-tiered zero tolerance productivity'}
//                     pBs={'transition cutting-edge web services'}
//                 />
//                 <hr/>
//             </div>
//
//             <div className={us}>
//                 <User
//                     pId={'5'}
//                     pName={'Chelsey Dietrich'}
//                     pUsername={'Kamren'}
//                     pEmail={'Lucio_Hettinger@annie.ca'}
//                     pPhone={'(254)954-1289'}
//                     pWebsite={'demarco.info'}
//                 />
//                 <Address
//                     pStreet={'Skiles Walks'}
//                     pSuite={'Suite 351'}
//                     pCity={'Roscoeview'}
//                     pZipcode={'33263'}
//                 />
//                 <Geo
//                     pLat={'-31.8129'}
//                     pLng={'62.5342'}
//                 />
//                 <Company
//                     pName={'Keebler LLC'}
//                     pCatchPhrase={'User-centric fault-tolerant solution'}
//                     pBs={'revolutionize end-to-end systems'}
//                 />
//                 <hr/>
//             </div>
//
//             <div className={us}>
//                 <User
//                     pId={'6'}
//                     pName={'Mrs. Dennis Schulist'}
//                     pUsername={'Leopoldo_Corkery'}
//                     pEmail={'Karley_Dach@jasper.info'}
//                     pPhone={'1-477-935-8478 x6430'}
//                     pWebsite={'ola.org'}
//                 />
//                 <Address
//                     pStreet={'Norberto Crossing'}
//                     pSuite={'Apt. 950'}
//                     pCity={'South Christy'}
//                     pZipcode={'23505-1337'}
//                 />
//                 <Geo
//                     pLat={'-71.4197'}
//                     pLng={'71.7478'}
//                 />
//                 <Company
//                     pName={'Considine-Lockman'}
//                     pCatchPhrase={'Synchronised bottom-line interface'}
//                     pBs={'e-enable innovative applications'}
//                 />
//                 <hr/>
//             </div>
//
//             <div className={us}>
//                 <User
//                     pId={'7'}
//                     pName={'Kurtis Weissnat'}
//                     pUsername={'Elwyn.Skiles'}
//                     pEmail={'Telly.Hoeger@billy.biz'}
//                     pPhone={'210.067.6132'}
//                     pWebsite={'elvis.io'}
//                 />
//                 <Address
//                     pStreet={'Rex Trail'}
//                     pSuite={'Suite 280'}
//                     pCity={'Howemouth'}
//                     pZipcode={'58804-1099'}
//                 />
//                 <Geo
//                     pLat={'24.8918'}
//                     pLng={'21.8984'}
//                 />
//                 <Company
//                     pName={'Johns Group'}
//                     pCatchPhrase={'Configurable multimedia task-force'}
//                     pBs={'generate enterprise e-tailers'}
//                 />
//                 <hr/>
//             </div>
//
//             <div className={us}>
//                 <User
//                     pId={'8'}
//                     pName={'Nicholas Runolfsdottir V'}
//                     pUsername={'Maxime_Nienow'}
//                     pEmail={'Sherwood@rosamond.me'}
//                     pPhone={'586.493.6943 x140'}
//                     pWebsite={'jacynthe.com'}
//                 />
//                 <Address
//                     pStreet={'Ellsworth Summit'}
//                     pSuite={'Suite 729'}
//                     pCity={'Aliyaview'}
//                     pZipcode={'45169'}
//                 />
//                 <Geo
//                     pLat={'-14.3990'}
//                     pLng={'-120.7677'}
//                 />
//                 <Company
//                     pName={'Abernathy Group'}
//                     pCatchPhrase={'Implemented secondary concept'}
//                     pBs={'e-enable extensible e-tailers'}
//                 />
//                 <hr/>
//             </div>
//
//             <div className={us}>
//                 <User
//                     pId={'9'}
//                     pName={'Glenna Reichert'}
//                     pUsername={'Delphine'}
//                     pEmail={'Chaim_McDermott@dana.io'}
//                     pPhone={'(775)976-6794 x41206'}
//                     pWebsite={'conrad.com'}
//                 />
//                 <Address
//                     pStreet={'Dayna Park'}
//                     pSuite={'Suite 449'}
//                     pCity={'Bartholomebury'}
//                     pZipcode={'76495-3109'}
//                 />
//                 <Geo
//                     pLat={'24.6463'}
//                     pLng={'-168.8889'}
//                 />
//                 <Company
//                     pName={'Yost and Sons'}
//                     pCatchPhrase={'Switchable contextually-based project'}
//                     pBs={'aggregate real-time technologies'}
//                 />
//                 <hr/>
//             </div>
//
//             <div className={us}>
//                 <User
//                     pId={'10'}
//                     pName={'Clementina DuBuque'}
//                     pUsername={'Moriah.Stanton'}
//                     pEmail={'Rey.Padberg@karina.biz'}
//                     pPhone={'024-648-3804'}
//                     pWebsite={'ambrose.net'}
//                 />
//                 <Address
//                     pStreet={'Kattie Turnpike'}
//                     pSuite={'Suite 198'}
//                     pCity={'Lebsackbury'}
//                     pZipcode={'31428-2261'}
//                 />
//                 <Geo
//                     pLat={'-38.2386'}
//                     pLng={'57.2232'}
//                 />
//                 <Company
//                     pName={'Hoeger LLC'}
//                     pCatchPhrase={'Centralized empowering task-force'}
//                     pBs={'target end-to-end models'}
//                 />
//                 <hr/>
//             </div>
//
//
//         </div>
//     );
// }
// export default App;
