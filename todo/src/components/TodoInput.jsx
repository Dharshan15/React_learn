

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    return (
        <>
        <div className="zoro">ZORODO</div>
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..." />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
        </>
    )
}