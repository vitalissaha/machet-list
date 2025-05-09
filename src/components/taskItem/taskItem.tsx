import React from "react";
import { useState } from "react";
import style from "./taskItem.module.css";

interface Task {
    id: number;
    title: string;
    createdAt: string | number | Date;
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    editTask: (id: number, completedValue: boolean) => void;
    deleteTask: (id: number) => void;
  }
  
  export const TaskItem: React.FC<TaskItemProps> = ({
    task,
    editTask,
    deleteTask,
  }) => {
    return (
      <li className={style.taskItem}>
        {task.title} (Créée le: {new Date(task.createdAt).toLocaleString()}){" "}
        {task.completed ? "✔️" : "❌"}
        <button onClick={() => editTask(task.id, !task.completed)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </li>
    );
  };