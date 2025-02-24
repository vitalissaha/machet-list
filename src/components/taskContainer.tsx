import { useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskinput/taskinput";
import { TaskList } from "./taskList/taskList";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

 export const TaskContainer = () => {

    const [taskList, setTaskList] = useState<Task[]>([]);

 const addTask = (title: string) => {
    const newTask ={
        id : taskList.length + 1,
        title,
        completed: false
    };
    setTaskList([...taskList, newTask]);
 };

    const editTask = (id: number, completedValue: boolean) => {
        setTaskList(
            taskList.map((task) =>
                task.id === id ? { ...task, completed: completedValue } : task
            )
        );
    };

    const deleteTask = (id: number) => {
        setTaskList(taskList.filter((task) => task.id !== id));
    };

    const getTaskCount = () => {
        const completedTasks = taskList.filter((task) => task.completed).length;
        const incompletedTasks = taskList.length - completedTasks;
        return { completedTasks, incompletedTasks };
    };

    const { completedTasks, incompletedTasks } = getTaskCount();
    console.log(completedTasks, incompletedTasks);

    return(
        <main>
            <Header/>
            <TaskInput addTask={addTask} />
            <TaskList 
            taskList={taskList}
             editTask={editTask} 
             deleteTask={deleteTask} 
             incompletedTasks={incompletedTasks}/>
            <Footer/>
        </main>
    );
 };