export const getTodos = async () => {
    const res = await fetch("https://playground.4geeks.com/todo/users/Alexnis");
    if (!res.ok) {
        createUser();
    }
    const data = await res.json();
    return data.todos;
}

const createUser = async () => {
    const rest = await fetch("https://playground.4geeks.com/todo/users/Alexnis", {
        method: "POST"
    })
}


export const createTodo = async (todo) => {
        const res = await fetch("https://playground.4geeks.com/todo/todos/Alexnis", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            label: todo,
            is_done: false
        })
    })
}

export const deleteTodo = async (id) => {
    const eliminar = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
        method: "DELETE",
    })
}
