import { useEffect, useState } from "react";
import {getTodos} from "../API/todoList.API";

export const TodoList = () => {
    const [tareas, setTareas] = useState([]);
    const [inputValue, setInputValue] = useState ("");
    
    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            setTareas ((prev) => [...prev, inputValue]);
        }
    };

    const datosRecibidos = async () => {
        const datos = await getTodos();
        setTareas(datos);
    }

    useEffect (()=> {
        datosRecibidos();
    } , [])

    return(
        <div>
            <input
             value={inputValue}
             type="text"
             onChange={(e) => setInputValue(e.target.value)}
             onKeyUp={(e) => handleKeyUp(e)}
             placeholder="tarea"
            />

            {tareas.map((tarea, index) => ) 
                <p key={index}>{tarea.label}</p>
            )}
        </div>
    )
}