import './App.css';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const CreateTodoForm = () => {
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');

    return (
        <div>
            <form onSubmit={()=>{
                console.log('submite')
            }}>
                <input type={'text'} value={title} onChange={({target:{value}})=>setTitle((value)) } placeholder={"todo title"}/>
                <br/>
                {/*<input type={'text'} value={description} onChange={} placeholder={"todo description"}/>*/}
                <br/>
                <button type="submit">create todo</button>
            </form>
        </div>
    )

}

const Todos = () => {

}

function App() {
    const store = useSelector(store => store);

    console.log(store);


    const fetchTodos = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        // const data = await
    }

    useEffect(() => {
        fetchTodos()
    }, [])


}

export default App;
