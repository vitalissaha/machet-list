// composant permet d'afficher le chant de saisie des tache
import { useState } from "react";
import style from "./taskinput.module.css";

interface TaskInputProps {
    addTask: (title: string) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
    
    const [taskTitle,setTaskTitle] = useState("");

    const handleInputChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    
        e.preventDefault();
        // addTask(taskTitle);
        setTaskTitle(e.target.value);
    
    };

    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(taskTitle.trim()){
            addTask(taskTitle);
            setTaskTitle("");
        };
    
    };

    return(
        <div className={`box ${style.element}`}>
            <h2 className={style.title}> 🎯ajoute ta premier tache</h2>
            <form className={style.container} onSubmit={handleAddTask}>
                <input type="text"
                className={style.input}
                placeholder="indiquez un titre de tache explicite"
                onChange={handleInputChange}
                value={taskTitle}
                />
                
                <button className="button-primary" type="submit">
                    ajouter
                </button>
            </form>
        </div>
    );
};