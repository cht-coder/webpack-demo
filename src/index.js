import { useLocalStorage } from "./chunk";

const [todos, setTodos] = useLocalStorage('todos', [1])

setTodos(prev=> [3,...prev, 5])

console.log(todos)

fetch('https://api.abc.com/123').then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.log(err))