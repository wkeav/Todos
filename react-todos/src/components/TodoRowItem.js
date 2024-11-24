

//props = properties ; pops is going to have a key of whatever item you pass in
function TodoRowItem(props){

return (
    <tr>
        <th scope='row'>{props.rowNumber}</th>
        <td>{props.rowDescription}</td>
        <td>{props.rowAssigned}</td>
    </tr>
    
)

}

export default TodoRowItem //allows to use this component within our application