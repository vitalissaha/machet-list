
import { TaskItem } from "../taskItem/taskItem";
import style from "./taskList.module.css";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskListProps {
    taskList: Task[];
    incompletedTasks: number;
    editTask: (id: number, completedValue: boolean) => void;
    deleteTask: (id: number) => void;
}



export const TaskList: React.FC<TaskListProps> = ({ taskList, incompletedTasks, editTask, deleteTask }) => {
    const taskItems = taskList.map((task) => (
        <TaskItem 
            key={task.id} 
            task={task} 
            editTask={editTask} 
            deleteTask={deleteTask} 
        />
    ));

    return (
        <div className="box">
            <h2 className={style.title}>
                📃 Il te reste encore {incompletedTasks} tâche(s) à accomplir
            </h2>
            {taskList && taskList.length > 0 ? (
                <ul className={style.container}>
                    {taskItems}
                </ul>
            ) : (
                <p>Aucune tâche à afficher</p>
            )}
        </div>
    );
};
