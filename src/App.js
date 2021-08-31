import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect, useState} from "react";

const CreateTodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description) return;
        console.log(title, description);
        try{
            await onSubmit(title, description);
            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e);
        }
    }
    console.log(CreateTodoForm);
    return (
        <div>
            <form onSubmit={(handleSubmit) => {

            }}>
                <br/>
                <input type={'text'} value={title} onChange={({target: {value}}) => setTitle((value))}
                       placeholder={"todo title"}/>
                <br/>
                <br/>
                <input type={'text'} value={description} onChange={({target: {value}}) => setTitle((value))}
                       placeholder={"todo description"}/>
                <br/>
                <br/>
                <button type="submit" disabled={!title || !description}>create todo</button>
            </form>
        </div>
    )

}

const Todos = () => {

}

function App() {
    const {todos} = useSelector(store => store.todosReduser);

    const dispatch = useDispatch();

    const fetchTodos = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json();
        dispatch({type:'ADD_TODOS', payloyd: data})
    }

    useEffect(() => {
        // fetchTodos()
    }, [])

    const onTodoCreate = async (title, description) => {
        if (!title || !description)return;
        const resp = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({title, description})
        })
        const data= await resp.json();
    }

    const Todos = ({todos}) => {
      return(
          <div>
              {todos.map(todo=>{
                  <Fragment key={todo.id}>
                      <div>{todos.title}</div>
                      <div>{todos.description}</div>
                  </Fragment>
              })}
          </div>
      )
    }

    return (
        <div className={"App"}>
            <CreateTodoForm onSubmit={onTodoCreate} />
            <Todos todus={todos}/>
        </div>
    )

}

export default App;
