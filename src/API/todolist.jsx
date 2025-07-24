export const getTodos = async () => {
    const res = await fetch("https://playground.4geeks.com/todo/users/name");
    if (!res.ok) {
        createUser();
    }
    const data = await res.json();
    return data.todos;
}

const createUser = async () => {
    const rest = await fetch("https://playground.4geeks.com/todo/users/name", {
        method: "POST"
    })
}


export const createTodo = async (todo) => {
    const res = await fetch("https://playground.4geeks.com/todo/todos/name", {
        method: "POST",
        header: {
            "content-Type": "aplication/json"

        },
        body: JSON.stringify({
            label: todo,
            is_done: false
        })
    })
}

