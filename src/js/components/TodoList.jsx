import { useEffect, useState } from "react";
import { createTodo, deleteTodo, getTodos } from "../../API/serviceApi";

export const TodoList = () => {
    const [nombre, setNombre] = useState([]);
    const [inputValue, setInputValue] = useState ("");
    
    console.log(nombre)

    const handleKeyUp = async (e) => {
        if (e.key === "Enter") {
        await createTodo(inputValue)
        await datosRecibidos()
        setInputValue("")
        }
    };

    const datosRecibidos = async () => {
        const datos = await getTodos();
        setNombre(datos);
    }

    useEffect (()=> {
        datosRecibidos();
    } , [])

    return(
        <div>
            <h3>Agregar Tarea</h3>
            <input
             value={inputValue}
             type="text"
             onChange={(e) => setInputValue(e.target.value)}
             onKeyUp={(e) => handleKeyUp(e)}
             placeholder="Nombre"
            />
            {
                nombre.map(tarea => (
                    <p key={tarea.id}>
                        <span>{tarea.label}</span>
                        <button className="btn btn-darkbtn" onClick={async() => {deleteTodo (tarea.id), await datosRecibidos()}}><i class="fa-solid fa-trash-can"></i></button>
                        </p>
                ))
            }
        </div>
    )
}