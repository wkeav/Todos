import TodoRowItem from "./TodoRowItem"
//"props.todos.map(todo => ()....." is saying that for each element in todos, 
//there are a new todo that represent TodoRowItem of each rowNumber, rowDescription and rowAssigned.
// this allows a dynamic of per item in todos list  
function TodoTable(props){
    return(
    <table className="table table-hover">
    <thead>
        <tr>
            <th scope='col'>#</th>
            <th scope='col'>Description</th>
            <th scope='col'>Assigned</th>
        </tr>
    </thead>
    <tbody>
        {props.todos.map(todo => (
            <TodoRowItem
                key={todo.rowNumber}
                rowNumber={todo.rowNumber}
                rowDescription={todo.rowDescription}
                rowAssigned={todo.rowAssigned}
            />

        ))}
    </tbody>
    </table>
)
}
export default TodoTable